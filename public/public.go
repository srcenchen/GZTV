package public

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"strings"
)

func InitIndex(router *gin.Engine) {
	router.Use(static.Serve("/", static.LocalFile("./WebUI", true)))

	// 挂载"./resource"到"/resource"，并且开启浏览器访问
	router.Use(static.Serve("/resource", static.LocalFile("./resource", true)))

	// 当没有匹配到路由时，返回index.html
	router.NoRoute(func(c *gin.Context) {
		accept := c.Request.Header.Get("Accept")
		flag := strings.Contains(accept, "text/html")
		if flag {
			c.File("./WebUI/index.html")
		} else {
			c.JSON(404, gin.H{
				"code": 404,
				"msg":  "404 page not found",
			})
		}
	})
}
