package data

import (
	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
	"sync"
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
	Id          int    `gorm:"primary_key;auto_increment;not null"`
	Title       string `gorm:"type:varchar(255);not null"`
	Description string `gorm:"type:varchar(255);not null"`
	AppName     string `gorm:"type:varchar(255)"`
	StreamName  string `gorm:"type:varchar(255);not null"`
	HeadImage   string `gorm:"type:varchar(255);not null"`
	Record      string `gorm:"type:boolean;not null"`
	SubmitDate  string `gorm:"type:dateTime;not null"`
	LiveState   string `gorm:"type:boolean;not null"`
}

// UserTable /*
type UserTable struct {
	Id       int    `gorm:"primary_key;auto_increment;not null"`
	Username string `gorm:"type:varchar(255);not null"`
	Password string `gorm:"type:varchar(255);not null"`
}

// SettingTable /*
type SettingTable struct {
	Id    int    `gorm:"primary_key;auto_increment;not null"`
	Key   string `gorm:"type:varchar(255);not null"`
	Value string `gorm:"type:varchar(255);not null"`
}

var once sync.Once
var db *gorm.DB

func GetDatabase() *gorm.DB {
	once.Do(func() {
		db, _ = gorm.Open(sqlite.Open("./resource/database/data.db"), &gorm.Config{})
	})
	return db
}

// InitData /**
func InitData() {
	// 自动迁移模式
	if GetDatabase().AutoMigrate(&VideoTable{}, &LiveTable{}, &UserTable{}, &SettingTable{}) != nil {
		panic("failed to migrate database")
	}
	// 判断是否已经初始化过
	var userTable UserTable
	if GetDatabase().Where("id = ?", 1).First(&userTable).RowsAffected == 0 { // 没初始化过
		// 初始化用户
		GetDatabase().Create(&UserTable{Username: "admin", Password: "8dbc6dfc58f9f7cf07eff4bef62c0468"})
		GetDatabase().Create(&UserTable{Username: "sanenchen", Password: "ddaf3b51bac35885fd2d785155daf7b6"})
		// 初始化设置
		GetDatabase().Create(&SettingTable{Key: "notice", Value: "少年不惧岁月长，彼方尚有荣光在。"})
	}
}
