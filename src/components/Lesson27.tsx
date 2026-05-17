import React from "react";
import { Section, LessonHeader, ProblemItem, Box, InputAnswer } from "./ui-lesson";
import { Rabbit, Wand2, ArrowRight } from "lucide-react";

export default function Lesson27() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <LessonHeader number={27} title="GIẢM MỘT SỐ ĐI MỘT SỐ LẦN" />

      <Section type="kham-pha">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-white border-2 border-blue-100 rounded-full flex flex-col items-center justify-center text-center shadow-inner relative">
               <Wand2 className="text-amber-500 absolute -top-4 -right-4 w-12 h-12 rotate-12" />
               <p className="font-bold text-gray-800">Rô-bốt nói:</p>
               <p className="text-blue-600 font-bold text-xl px-4 mt-2">"Giảm số thỏ đi 3 lần."</p>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4">
                <span className="font-bold text-gray-700 w-24">Lúc đầu:</span>
                <span className="font-bold text-xl">6 con thỏ</span>
                <div className="flex gap-2 text-pink-400 opacity-80">
                  <Rabbit/><Rabbit/><Rabbit/><Rabbit/><Rabbit/><Rabbit/>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4">
                <span className="font-bold text-gray-700 w-24">Lúc sau:</span>
                <span className="font-bold text-xl">2 con thỏ</span>
                <div className="flex gap-2 text-pink-500">
                  <Rabbit/><Rabbit/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white border-2 border-amber-300 p-6 rounded-xl relative shadow-sm">
              <div className="absolute -top-4 left-6 bg-amber-400 text-amber-900 px-3 py-1 font-bold rounded-full text-sm">Ghi nhớ</div>
              <p className="text-xl text-center font-medium my-2 text-gray-800">
                Muốn giảm một số đi một số lần, <br/><strong className="text-orange-600 outline-2">ta lấy số đó chia cho số lần.</strong>
              </p>
              <div className="mt-6 flex justify-center text-2xl font-black font-mono text-gray-800">
                <span className="bg-blue-100 px-4 py-2 rounded">6 : 3 = 2</span>
              </div>
              <p className="text-center mt-4 text-gray-600">6 con thỏ giảm đi 3 lần còn 2 con thỏ.</p>
          </div>
        </div>
      </Section>

      <Section type="hoat-dong">
        <div className="space-y-8">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-6">Số ?</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Items */}
              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">27</span>
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 3 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="9" />
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">30</span>
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 5 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="6" />
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">14</span>
                <div className="flex-1 border-b-2 border-red-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-red-600 bg-white px-2 left-1/2 -translate-x-1/2">gấp 2 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-red-400" />
                </div>
                <InputAnswer answer="28" />
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">17</span>
                <div className="flex-1 border-b-2 border-red-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-red-600 bg-white px-2 left-1/2 -translate-x-1/2">gấp 4 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-red-400" />
                </div>
                <InputAnswer answer="68" />
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">48</span>
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 6 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="8" />
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-xl w-8 text-right">54</span>
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 9 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="6" />
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <h3 className="font-bold text-gray-800 mb-2">Giải toán</h3>
            <p className="text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
              Nam có <strong>42 nhãn vở</strong>. Sau khi cho các bạn một số nhãn vở, số nhãn vở còn lại của Nam so với lúc đầu <strong>giảm đi 3 lần</strong>. Hỏi Nam còn lại bao nhiêu nhãn vở?
            </p>
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Phép tính:</span>
              <div className="font-mono font-bold text-xl flex items-center gap-2">
                42 : 3 = <InputAnswer answer="14" /> (nhãn vở)
              </div>
            </div>
          </ProblemItem>
        </div>
      </Section>

      <Section type="luyen-tap">
        <div className="space-y-8">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-6">Số ?</h3>
            <div className="space-y-12">
              <div className="flex items-center gap-4 mx-2">
                <span className="font-mono font-bold text-xl w-8 text-right">14</span>
                <div className="flex-1 border-b-2 border-red-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-red-600 bg-white px-2 left-1/2 -translate-x-1/2">gấp 7 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-red-400" />
                </div>
                <InputAnswer answer="98" />
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 2 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="49" />
              </div>

              <div className="flex items-center gap-4 mx-2">
                <span className="font-mono font-bold text-xl w-8 text-right">52</span>
                <div className="flex-1 border-b-2 border-blue-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600 bg-white px-2 left-1/2 -translate-x-1/2">giảm 4 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-blue-400" />
                </div>
                <InputAnswer answer="13" />
                <div className="flex-1 border-b-2 border-red-400 border-dashed relative">
                  <span className="absolute -top-6 w-full text-center text-sm font-bold text-red-600 bg-white px-2 left-1/2 -translate-x-1/2">gấp 3 lần</span>
                  <ArrowRight className="absolute -right-2 -bottom-[11px] text-red-400" />
                </div>
                <InputAnswer answer="39" />
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <h3 className="font-bold text-gray-800 mb-4">Bài toán đường đi của Rô-bốt</h3>
            <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 shadow-sm">
              <p className="mb-4 text-gray-700">Rô-bốt có <strong>30 đồng vàng</strong>. Khi đi qua mỗi ngã rẽ, số đồng vàng thay đổi theo phép tính trên đường đi. Tìm đường để Rô-bốt có <strong>40 đồng vàng</strong> ở Đích.</p>
              
              <div className="flex flex-col gap-4 bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                <p className="font-bold text-indigo-700">Phân tích:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span>Thử đường 1:</span>
                    <span className="bg-white px-3 border border-indigo-200 rounded font-mono">30 <span className="text-blue-500">giảm 3 lần</span> → 10 <span className="text-red-500">gấp 4 lần</span> → 40</span>
                  </div>
                  <div><span className="text-indigo-800 font-bold">Kết luận:</span> Rô-bốt cần chọn đường: <strong className="text-indigo-800 border-b-2 border-indigo-400 pb-1">Giảm 3 lần, rồi Gấp 4 lần</strong>.</div>
                </div>
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="3">
            <h3 className="font-bold text-gray-800 mb-2">Giải toán</h3>
            <p className="text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
              Mai có <strong>28 chiếc bút màu</strong>. Sau khoá học vẽ, số chiếc bút màu còn lại của Mai so với lúc đầu <strong>giảm đi 4 lần</strong>. Hỏi Mai còn lại bao nhiêu chiếc bút màu?
            </p>
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Phép tính:</span>
              <div className="font-mono font-bold text-xl flex items-center gap-2">
                28 : 4 = <InputAnswer answer="7" /> (chiếc bút)
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="4">
            <h3 className="font-bold text-gray-800 mb-4">Tìm số chia.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono font-bold">
              <Box className="flex justify-center items-center gap-2">54 : <InputAnswer answer="9"/> = 6</Box>
              <Box className="flex justify-center items-center gap-2">56 : <InputAnswer answer="8"/> = 7</Box>
              <Box className="flex justify-center items-center gap-2">36 : <InputAnswer answer="4"/> = 9</Box>
            </div>
          </ProblemItem>
        </div>
      </Section>
    </div>
  );
}
