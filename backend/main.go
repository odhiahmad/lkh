package main

import "github.com/gin-gonic/gin"

func main(){
		router:=gin.Default()

		usersGroup := router.Group("users"){
			usersGroup.POST("register",routes.UsersRegister)
		}

		router.Run(":3000")
}