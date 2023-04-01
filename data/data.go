package data

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// 数据表结构

// VideoTable /*
type VideoTable struct {
	Id          int    `gorm:"primary_key;auto_increment;not null"`
	Title       string `gorm:"type:varchar(255);not null"`
	Description string `gorm:"type:varchar(255);not null"`
	VideoName   string `gorm:"type:varchar(255);not null"`
	HeadImage   string `gorm:"type:varchar(255);not null"`
	UploadDate  string `gorm:"type:dateTime;not null"`
}

// LiveTable /*
type LiveTable struct {
	Id         int    `gorm:"primary_key;auto_increment;not null"`
	Title      string `gorm:"type:varchar(255);not null"`
	AppName    string `gorm:"type:varchar(255)"`
	StreamName string `gorm:"type:varchar(255);not null"`
	HeadImage  string `gorm:"type:varchar(255);not null"`
	Record     string `gorm:"type:boolean;not null"`
}

// UserTable /*
type UserTable struct {
	Id       int    `gorm:"primary_key;auto_increment;not null"`
	Password string `gorm:"type:varchar(255);not null"`
}

func getDatabase() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("./resource/database/data.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}

// InitData /**
func InitData() {
	// 自动迁移模式
	if getDatabase().AutoMigrate(&VideoTable{}, &LiveTable{}, &UserTable{}) != nil {
		panic("failed to migrate database")
	}
	// 判断是否已经初始化过
	var userTable UserTable
	if getDatabase().Where("id = ?", 1).First(&userTable).RowsAffected == 0 { // 没初始化过
		getDatabase().Create(&UserTable{Password: "8D45E8B0F392A9DC92E83B7A5AA37153EAE01E622AB01B67EED4AB05"})
		getDatabase().Create(&UserTable{Password: "0D17D26FF83211FBB89FC0F016D00AD39F34DAF9A4D4A188A0086B6C"})
	}
}

// 直播相关

// GetAllLives 获取所有直播列表
func GetAllLives() []LiveTable {
	var liveTable []LiveTable
	getDatabase().Find(&liveTable)
	return liveTable
}

// GetLiveByID 根据id获取直播
func GetLiveByID(id string) LiveTable {
	var liveTable LiveTable
	getDatabase().Where("id = ?", id).First(&liveTable)
	return liveTable
}

// AddLive 添加直播
func AddLive(title string, appName string, streamName string, headImage string, record string) int {
	liveTable := LiveTable{Title: title, AppName: appName, StreamName: "live", HeadImage: headImage, Record: record}
	// 执行 SQL 语句
	getDatabase().Raw("UPDATE live_tables SET stream_name = " + string(liveTable.Id) + " WHERE id = " + string(liveTable.Id))
	getDatabase().Create(&liveTable)
	return liveTable.Id // 返回插入的id
}

// DeleteLive 删除直播
func DeleteLive(id string) {
	getDatabase().Where("id = ?", id).Delete(&LiveTable{})
}

// 在线视频相关

// GetAllVideos 获取所有视频列表
func GetAllVideos() []VideoTable {
	var videoTable []VideoTable
	getDatabase().Find(&videoTable)
	return videoTable
}

// GetVideoByID 根据id获取视频
func GetVideoByID(id string) VideoTable {
	var videoTable VideoTable
	getDatabase().Where("id = ?", id).First(&videoTable)
	return videoTable
}

// AddVideo 添加视频
func AddVideo(title string, description string, videoPath string, headImage string, uploadDate string) {
	getDatabase().Create(&VideoTable{Title: title, Description: description, VideoName: videoPath, HeadImage: headImage, UploadDate: uploadDate})
}

// DeleteVideo 删除视频
func DeleteVideo(id string) {
	println(id)
	getDatabase().Where("id = ?", id).Delete(&VideoTable{})
}

// 用户相关

// VerifyUser 验证密码
func VerifyUser(password string) bool {
	var userTable UserTable
	result := getDatabase().Where("password = ?", password).First(&userTable)
	return result.RowsAffected != 0
}
