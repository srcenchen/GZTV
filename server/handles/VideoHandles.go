package handles

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data/dataUtils"
	"os"
	"time"
)

// GetVideos 获取所有视频
func GetVideos(c *gin.Context) {
	result := dataUtils.GetVideos()
	c.JSON(200, result)
}

type VideoUpload struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	VideoFile   string `json:"video"`
	HeadImage   string `json:"cover"`
}

// AddVideo 添加视频
func AddVideo(c *gin.Context) {
	t := time.Now()
	uploadDate := t.Format("2006-01-02 15:04:05")
	json := VideoUpload{}
	_ = c.BindJSON(&json)
	dataUtils.AddVideo(json.Title, json.Description, json.VideoFile, json.HeadImage, uploadDate)
	c.JSON(200, gin.H{
		"message": "success",
	})
}

// GetVideoByID 根据ID获取视频
func GetVideoByID(c *gin.Context) {
	result := dataUtils.GetVideoByID(c.Query("id"))
	c.JSON(200, result)
}

// DeleteVideoByID 根据ID删除视频
func DeleteVideoByID(c *gin.Context) {
	// 获取视频信息
	video := dataUtils.GetVideoByID(c.Query("id"))
	// 删除视频
	_ = os.Remove("./resource/upload/videos/" + video.VideoName)
	// 删除封面
	_ = os.Remove("./resource/upload/images/" + video.HeadImage)

	dataUtils.DeleteVideoByID(c.Query("id"))
	c.JSON(200, gin.H{
		"message": "success",
	})
}
