FROM alpine
# 复制主文件
COPY gztv /gztv/gztv
# 复制WebUI文件夹
COPY WebUI /gztv/WebUI
# 复制配置文件
COPY conf /gztv/conf
# 进入工作目录
WORKDIR /gztv
# 设置时区
ENV TZ=Asia/Shanghai
# 启动锚点
ENTRYPOINT ["./gztv"]
# 导出端口 8020 8021 8022 8084 1936 4935 4433 5544 5322 
EXPOSE 8020 8021 8022 8084 1936 4935 4433 5544 5322