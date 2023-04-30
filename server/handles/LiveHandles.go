package handles

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data"
	"github.com/srcenchen/gztv/data/dataUtils"
	"github.com/tidwall/gjson"
	"io"
	"net/http"
	"os"
	"strconv"
	"time"
)

// GetLives 获取所有直播
func GetLives(c *gin.Context) {
	result := dataUtils.GetLives()
	newResult := make([]data.LiveTable, 0)
	// 历遍所有直播，如果直播已经结束，就将直播状态改为已结束
	for _, live := range result {
		streamName := live.StreamName
		// 通过API获取直播状态
		resp, _ := http.Get("http://127.0.0.1:8022/api/stat/group?stream_name=" + streamName)
		jsonData, _ := io.ReadAll(resp.Body)
		_ = resp.Body.Close()
		resultCode := gjson.Get(string(jsonData), "error_code")
		// 篡改直播状态
		if resultCode.Int() == 0 {
			live.LiveState = "true"
		}
		newResult = append(newResult, live)
	}
	c.JSON(200, newResult)
}

type LiveUpload struct {
	Title       string `json:"title"`
	HeadImage   string `json:"cover"`
	Description string `json:"description"`
}

// AddLive 添加直播
func AddLive(c *gin.Context) {
	jsons := LiveUpload{}
	_ = c.BindJSON(&jsons)
	timeUnix := time.Now().UnixNano()
	t := time.Now()
	uploadDate := t.Format("2006-01-02 15:04:05")
	dataUtils.AddLive(jsons.Title, "liveGZTV", strconv.FormatInt(timeUnix, 10), jsons.HeadImage, "false", uploadDate, jsons.Description)
	c.JSON(200, gin.H{
		"message": "success",
	})
}

// GetLiveByID 根据ID获取视频
func GetLiveByID(c *gin.Context) {
	result := dataUtils.GetLiveByID(c.Query("id"))
	// 历遍所有直播，如果直播已经结束，就将直播状态改为已结束
	streamName := result.StreamName
	// 通过API获取直播状态
	resp, _ := http.Get("http://127.0.0.1:6022/api/stat/group?stream_name=" + streamName)
	jsonData, _ := io.ReadAll(resp.Body)
	_ = resp.Body.Close()
	resultCode := gjson.Get(string(jsonData), "error_code")
	// 篡改直播状态
	if resultCode.Int() == 0 {
		result.LiveState = "true"
	}
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
