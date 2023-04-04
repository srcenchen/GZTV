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

func GetDatabase() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("./resource/database/data.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}

// InitData /**
func InitData() {
	// 自动迁移模式
	if GetDatabase().AutoMigrate(&VideoTable{}, &LiveTable{}, &UserTable{}) != nil {
		panic("failed to migrate database")
	}
	// 判断是否已经初始化过
	var userTable UserTable
	if GetDatabase().Where("id = ?", 1).First(&userTable).RowsAffected == 0 { // 没初始化过
		// 初始化用户
		GetDatabase().Create(&UserTable{Password: "8D45E8B0F392A9DC92E83B7A5AA37153EAE01E622AB01B67EED4AB05"})
		GetDatabase().Create(&UserTable{Password: "0D17D26FF83211FBB89FC0F016D00AD39F34DAF9A4D4A188A0086B6C"})
		GetDatabase().Create(&UserTable{Password: "众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。"}) // 这个不是用户，这个就作为告示板吧
	}
}
