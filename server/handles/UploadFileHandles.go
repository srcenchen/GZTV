package handles

import (
	"github.com/gin-gonic/gin"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

// UploadImage 上传图片
func UploadImage(c *gin.Context) {
	// 单文件
	file, _ := c.FormFile("file")
	fileName := fileNameEncode(file.Filename)
	err := c.SaveUploadedFile(file, "./resource/upload/images/"+fileName)
	if err != nil {
		return
	}
	// 返回文件名
	c.JSON(200, gin.H{
		"type":     "images",
		"fileName": fileName,
	})
}

// UploadVideo 上传视频
func UploadVideo(c *gin.Context) {
	// 单文件
	file, _ := c.FormFile("file")
	fileName := fileNameEncode(file.Filename)

	err := c.SaveUploadedFile(file, "./resource/upload/videos/"+fileName)
	if err != nil {
		return
	}
	// 返回文件名
	c.JSON(200, gin.H{
		"type": "videos",
		"file": fileName,
	})
}

// fileNameEncode 文件名处理
func fileNameEncode(fileName string) string {
	// 获取当前时间戳
	timeUnix := time.Now().Unix()
	// 脱敏
	// 随机数种子
	rand.Seed(time.Now().UnixNano())
	fileID := strconv.FormatInt(timeUnix, 10) + strconv.Itoa(rand.Intn(1000))
	// 拆分文件名和后缀
	fileSuffix := fileName[strings.LastIndex(fileName, "."):]
	// 拼接新的文件名
	newFileName := fileID + fileSuffix
	return newFileName
}
