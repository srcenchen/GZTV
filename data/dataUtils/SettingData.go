package dataUtils

import "github.com/srcenchen/gztv/data"

// GetNotice 获取公告
func GetNotice() data.SettingTable {
	var settingTable data.SettingTable
	data.GetDatabase().Where("key = ?", "notice").First(&settingTable)
	return settingTable
}

// UpdateNotice 更新公告
func UpdateNotice(content string) {
	var settingTable data.SettingTable
	data.GetDatabase().Where("key = ?", "notice").First(&settingTable)
	settingTable.Value = content
}
