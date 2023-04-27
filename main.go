package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/srcenchen/gztv/data"
	"github.com/srcenchen/gztv/lalserver"
	"github.com/srcenchen/gztv/public"
	"github.com/srcenchen/gztv/server"
	"os"
	"io/ioutil"
)

func main() {
	initPath()                  // 初始化文件夹
	data.InitData()             // 数据库初始化
	go lalserver.StreamServer() // 启动流媒体服务器
	fmt.Println("流媒体服务器已经启动。")
	go WebUI() // 启动WebUI
	fmt.Println("WebUI 和 后端端口已经启动，运行在8020端口。")
	select {}
}

// WebUI /**
func WebUI() {
	// 禁止Gin的控制台输出
        gin.SetMode(gin.ReleaseMode)
        gin.DefaultWriter = ioutil.Discard
	router := gin.Default()
	server.Router(router) // 启动后端路由
	public.InitIndex(router)
	err := router.Run(":8020")
	if err != nil {
		return
	}
}

// createPath /**
func createPath(path string) {
	// 检测是否存在 path 文件夹 如果不存在则创建
	if _, err := os.Stat(path); os.IsNotExist(err) {
		errs := os.Mkdir(path, os.ModePerm)
		if errs != nil {
			return
		}
	}
}

// initPath /**
func initPath() {
	// 创建文件夹
	createPath("./resource")
	createPath("./resource/database")
	createPath("./resource/upload")
	createPath("./resource/upload/images")
	createPath("./resource/upload/videos")
}
