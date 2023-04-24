// Copyright 2020, Chef.  All rights reserved.
// https://github.com/srcenchen/gztv
//
// Use of this source code is governed by a MIT-style license
// that can be found in the License file.
//
// Author: Chef (191201771@qq.com)

package remux

// TODO(chef): refactor 此package更名为avop，内部包含remux_xxx2xxx.go, filter_xxx.go, 协议相关(比如rtmp.go)等

var _ iRtmp2MpegtsFilterObserver = &Rtmp2MpegtsRemuxer{}

const pcmDefaultSampleRate = 8000
