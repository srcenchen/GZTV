// Copyright 2022, Chef.  All rights reserved.
// https://github.com/srcenchen/gztv
//
// Use of this source code is governed by a MIT-style license
// that can be found in the License file.
//
// Author: Chef (191201771@qq.com)

package remux

import "github.com/q191201771/naza/pkg/nazalog"

var (
	Log = nazalog.GetGlobalLogger()

	//AvPacket2RtmpRemuxerAddSpsPps2KeyFrameFlag = false

	// RtspRemuxerAddSpsPps2KeyFrameFlag https://github.com/srcenchen/gztv/issues/205
	//
	RtspRemuxerAddSpsPps2KeyFrameFlag = false
)
