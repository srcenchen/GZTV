package dataUtils

import "github.com/srcenchen/gztv/data"

// VerifyUser 验证密码
func VerifyUser(password string) bool {
	var userTable data.UserTable
	result := data.GetDatabase().Where("password = ?", password).First(&userTable)
	return result.RowsAffected != 0
}

// GetNotice 获取公告
func GetNotice() data.UserTable {
	var userTable data.UserTable
	data.GetDatabase().Where("id = ?", "3").First(&userTable)
	return userTable
}

// UpdateNotice 更新公告
func UpdateNotice(content string) {
	var userTable data.UserTable
	data.GetDatabase().Where("id = ?", "3").First(&userTable)
	userTable.Password = content
	data.GetDatabase().Save(&userTable)
}
