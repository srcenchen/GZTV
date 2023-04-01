package handles

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data"
	"os"
	"time"
)

// 直播相关 Handles 处理

// GetAllLives 获取所有直播
func GetAllLives(c *gin.Context) {
	result := data.GetAllLives()
	// 数组转json
	c.JSON(200, result)
}

// GetLiveByID 根据ID获取直播
func GetLiveByID(c *gin.Context) {
	result := data.GetLiveByID(c.Query("id"))
	c.JSON(200, result)
}

// AddLive 添加直播
func AddLive(c *gin.Context) {
	headImage := c.Query("headImage")
	if headImage == "" {
		headImage = "logo.png"
	}
	resultID := data.AddLive(
		c.Query("title"), c.Query("appName"), c.Query("streamName"),
		headImage, c.Query("record"))
	c.JSON(200, gin.H{
		"status": "success",
		"id":     resultID,
	})
}

// DeleteLive 删除直播
func DeleteLive(c *gin.Context) {
	data.DeleteLive(c.Query("id"))
	// 通过ID获取直播信息
	if c.Query("headImage") != "" && c.Query("headImage") != "logo.png" {
		// 删除视频封面
		err := os.Remove("./resource/upload/images/" + c.Query("headImage"))
		if err != nil {
			return
		}
	}

	c.JSON(200, gin.H{
		"status": "success",
	})
}

// 视频相关 Handles 处理

// GetAllVideos 获取所有视频
func GetAllVideos(c *gin.Context) {
	result := data.GetAllVideos()
	// 数组转json
	c.JSON(200, result)
}

// GetVideoByID 根据ID获取视频
func GetVideoByID(c *gin.Context) {
	result := data.GetVideoByID(c.Query("id"))
	c.JSON(200, result)
}

// AddVideo 添加视频
func AddVideo(c *gin.Context) {
	headImage := c.Query("headImage")
	if headImage == "" {
		headImage = "logo.png"
	}

	// 获取当前时间用于插入到数据库
	t := time.Now()
	uploadDate := t.Format("2006-01-02 15:04:05")

	// 获取raw
	data.AddVideo(
		c.Query("title"), c.Query("description"), c.Query("videoName"),
		headImage, uploadDate)
	c.JSON(200, gin.H{
		"status": "success",
	})
}

// DeleteVideo 删除视频
func DeleteVideo(c *gin.Context) {
	data.DeleteVideo(c.Query("id"))
	// 删除视频文件
	DeleteVideoFile(c)
	// 删除视频封面
	DeleteImageFile(c)
	c.JSON(200, gin.H{
		"status": "success",
	})
}

// 上传文件相关 Handles 处理

// UploadImage 上传图片
func UploadImage(c *gin.Context) {
	// 单文件
	file, _ := c.FormFile("file")
	// 上传文件至指定目录
	err := c.SaveUploadedFile(file, "./resource/upload/images/"+file.Filename)
	if err != nil {
		return
	}
	// 返回文件名
	c.JSON(200, gin.H{
		"status": "success",
		"file":   file.Filename,
	})
}

// UploadVideo 上传视频
func UploadVideo(c *gin.Context) {
	// 单文件
	file, _ := c.FormFile("file")
	// 上传文件至指定目录
	err := c.SaveUploadedFile(file, "./resource/upload/videos/"+file.Filename)
	if err != nil {
		return
	}
	// 返回文件名
	c.JSON(200, gin.H{
		"status": "success",
		"file":   file.Filename,
	})
}

// 管理员相关 Handles 处理

// VerifyUser 验证用户
func VerifyUser(c *gin.Context) {
	result := data.VerifyUser(c.Query("password"))
	c.JSON(200, result)
}

// DeleteVideoFile /** 文件相关 Handles 处理
func DeleteVideoFile(c *gin.Context) {
	err := os.Remove("./resource/upload/videos/" + c.Query("videoName"))
	if err != nil {
		return
	}
	c.JSON(200, gin.H{
		"status": "success",
	})
}

// DeleteImageFile 删除图片文件
func DeleteImageFile(c *gin.Context) {
	err := os.Remove("./resource/upload/images/" + c.Query("headImage"))
	if err != nil {
		return
	}
	c.JSON(200, gin.H{
		"status": "success",
	})
}
