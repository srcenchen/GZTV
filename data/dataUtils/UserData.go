package dataUtils

import "github.com/srcenchen/gztv/data"

// VerifyUser 验证密码
func VerifyUser(username string, password string) bool {
	var userTable data.UserTable
	result := data.GetDatabase().Where("username = ?", username).Where("password = ?", password).First(&userTable)
	return result.RowsAffected != 0
}

// ChangePassword 修改密码
func ChangePassword(username string, password string) {
	var userTable data.UserTable
	data.GetDatabase().Where("username = ?", username).First(&userTable)
	userTable.Password = password
	data.GetDatabase().Save(&userTable)
}
