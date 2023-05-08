FROM debian
# 预先配置
RUN apt update
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone
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
# 导出端口 6020 6021 6022 1936 4433
EXPOSE 6020 6021 6022 1936 4433
