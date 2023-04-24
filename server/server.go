package server

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/server/handles"
	"net/http"
)

func Router(router *gin.Engine) {
	// 跨域处理
	router.Use(Cors())
	api := router.Group("/api") // 后端路由

	// 在线视频相关 api
	api.GET("/getVideos", handles.GetVideos)         // 获取视频列表
	api.POST("/addVideo", handles.AddVideo)          // 添加视频
	api.GET("/getVideoByID", handles.GetVideoByID)   // 根据id获取视频
	api.GET("/deleteVideo", handles.DeleteVideoByID) // 根据id删除视频

	// 直播相关 api
	api.GET("/getLives", handles.GetLives)         // 获取直播列表
	api.POST("/addLive", handles.AddLive)          // 添加直播
	api.GET("/getLiveByID", handles.GetLiveByID)   // 根据id获取直播
	api.GET("/deleteLive", handles.DeleteLiveByID) // 根据id删除视频

	// 文件处理
	api.POST("/uploadImage", handles.UploadImage) // 上传图片
	api.POST("/uploadVideo", handles.UploadVideo) // 上传视频

	// 用户相关 api
	api.POST("/verifyUser", handles.VerifyUser)        // 验证用户
	api.GET("/changePassword", handles.ChangePassword) // 修改密码
	api.GET("/getNotice", handles.GetNotice)           // 获取公告
	api.GET("/updateNotice", handles.UpdateNotice)     // 更新公告

}

// Cors /** 跨域处理
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin")
		if origin != "" {
			c.Header("Access-Control-Allow-Origin", "*") // 可将将 * 替换为指定的域名
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
			c.Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
			c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
			c.Header("Access-Control-Allow-Credentials", "true")
		}
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()
	}
}
