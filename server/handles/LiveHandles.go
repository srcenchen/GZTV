package handles

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data/dataUtils"
	"os"
	"strconv"
	"time"
)

// GetLives 获取所有直播
func GetLives(c *gin.Context) {
	result := dataUtils.GetLives()
	c.JSON(200, result)
}

type LiveUpload struct {
	Title     string `json:"title"`
	HeadImage string `json:"cover"`
}

// AddLive 添加直播
func AddLive(c *gin.Context) {
	json := LiveUpload{}
	_ = c.BindJSON(&json)
	timeUnix := time.Now().UnixNano()
	dataUtils.AddLive(json.Title, "liveGZTV", strconv.FormatInt(timeUnix, 10), json.HeadImage, "false")
	c.JSON(200, gin.H{
		"message": "success",
	})
}

// GetLiveByID 根据ID获取视频
func GetLiveByID(c *gin.Context) {
	result := dataUtils.GetLiveByID(c.Query("id"))
	c.JSON(200, result)
}

// DeleteLiveByID 根据ID删除直播
func DeleteLiveByID(c *gin.Context) {
	// 获取视频信息
	video := dataUtils.GetLiveByID(c.Query("id"))
	// 删除封面
	_ = os.Remove("./resource/upload/images/" + video.HeadImage)

	dataUtils.DeleteLiveByID(c.Query("id"))
	c.JSON(200, gin.H{
		"message": "success",
	})
}
