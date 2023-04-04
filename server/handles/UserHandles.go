package handles

import (
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data/dataUtils"
)

/**
处理 User 相关的请求
*/

type User struct {
	Password string `json:"password"`
}

// VerifyUser 验证用户
func VerifyUser(c *gin.Context) {
	json := User{}
	err := c.BindJSON(&json)
	if err != nil {
		c.JSON(200, gin.H{
			"result": false,
		})
		return
	}
	result := dataUtils.VerifyUser(json.Password)
	c.JSON(200, gin.H{
		"result": result,
	}) // 返回验证结果
}

// GetNotice 获取公告
func GetNotice(c *gin.Context) {
	result := dataUtils.GetNotice()
	c.JSON(200, result)
}

// UpdateNotice 更新公告
func UpdateNotice(c *gin.Context) {
	dataUtils.UpdateNotice(c.Query("content"))
}
