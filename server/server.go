package server

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/server/handles"
	"log"
	"net/http"
)

func Router(router *gin.Engine) {
	router.Use(Cors())                            // 跨域处理
	api := router.Group("/api")                   // 后端路由
	api.GET("/videoList", handles.GetAllVideos)   // 获取视频列表
	api.GET("/videoDetail", handles.GetLiveByID)  // 获取直播详情
	api.GET("/liveList", handles.GetAllLives)     // 获取直播列表
	api.GET("/liveDetail", handles.GetVideoByID)  // 获取视频详情
	api.GET("/deleteLive", handles.DeleteLive)    // 删除直播
	api.GET("/deleteVideo", handles.DeleteVideo)  // 删除视频
	api.GET("/addLive", handles.AddLive)          // 添加直播
	api.GET("/addVideo", handles.AddVideo)        // 添加视频
	api.POST("/uploadImage", handles.UploadImage) // 上传图片
	api.POST("/uploadVideo", handles.UploadVideo) // 上传视频

	api.GET("/verifyUser", handles.VerifyUser) // 验证用户

	api.GET("deleteVideoFile", handles.DeleteVideoFile) // 删除视频文件
	api.GET("deleteImageFile", handles.DeleteImageFile) // 删除图片文件
}

// Cors /** 跨域处理
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin") //请求头部
		if origin != "" {
			//接收客户端发送的origin （重要！）
			c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
			//服务器支持的所有跨域请求的方法
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE,UPDATE")
			//允许跨域设置可以返回其他子段，可以自定义字段
			c.Header("Access-Control-Allow-Headers", "Authorization, Content-Length, X-CSRF-Token, Token,session")
			// 允许浏览器（客户端）可以解析的头部 （重要）
			c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers")
			//设置缓存时间
			c.Header("Access-Control-Max-Age", "172800")
			//允许客户端传递校验信息比如 cookie (重要)
			c.Header("Access-Control-Allow-Credentials", "true")
		}

		//允许类型校验
		if method == "OPTIONS" {
			c.JSON(http.StatusOK, "ok!")
		}

		defer func() {
			if err := recover(); err != nil {
				log.Printf("Panic info is: %v", err)
			}
		}()

		c.Next()
	}
}
