FROM alpine

COPY gztv /gztv/gztv
# 复制WebUI文件夹
COPY WebUI /gztv/WebUI
# 复制配置文件
COPY conf /gztv/conf
# ENTRYPOINT ["/gztv/gztv"]