package dataUtils

import "github.com/srcenchen/gztv/data"

// GetVideos 获取所有视频列表
func GetVideos() []data.VideoTable {
	var videoTable []data.VideoTable
	data.GetDatabase().Find(&videoTable)
	return videoTable
}

// AddVideo 添加视频
func AddVideo(title string, description string, videoFile string, headImage string, uploadDate string) {
	data.GetDatabase().Create(&data.VideoTable{Title: title, Description: description, VideoName: videoFile, HeadImage: headImage, UploadDate: uploadDate})
}

// GetVideoByID 根据id获取视频
func GetVideoByID(id string) data.VideoTable {
	var videoTable data.VideoTable
	data.GetDatabase().Where("id = ?", id).First(&videoTable)
	return videoTable
}

// DeleteVideoByID 根据id删除视频
func DeleteVideoByID(id string) {
	var videoTable data.VideoTable
	data.GetDatabase().Where("id = ?", id).Delete(&videoTable)
}
