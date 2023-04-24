package dataUtils

import "github.com/srcenchen/gztv/data"

// GetLives 获取所有直播列表
func GetLives() []data.LiveTable {
	var liveTable []data.LiveTable
	data.GetDatabase().Find(&liveTable)
	return liveTable
}

// AddLive 添加直播
func AddLive(title string, appName string, streamName string, headImage string, record string, submit string, description string) {
	data.GetDatabase().Create(
		&data.LiveTable{Title: title, Description: description, AppName: appName, StreamName: streamName,
			HeadImage: headImage, Record: record, SubmitDate: submit, LiveState: "false"})
}

// GetLiveByID 根据id获取直播
func GetLiveByID(id string) data.LiveTable {
	var liveTable data.LiveTable
	data.GetDatabase().Where("id = ?", id).First(&liveTable)
	return liveTable
}

// DeleteLiveByID 根据id删除直播
func DeleteLiveByID(id string) {
	var liveTable data.LiveTable
	data.GetDatabase().Where("id = ?", id).Delete(&liveTable)
}
