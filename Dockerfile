FROM alpine
ENV TZ Asia/Shanghai
RUN apk add alpine-conf && \
    /sbin/setup-timezone -z Asia/Shanghai && \
    apk del alpine-conf
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