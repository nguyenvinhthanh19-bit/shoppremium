export type ServicePlan = {
  accountType: string;
  duration: string;
  price: string;
};

export type Service = {
  name: string;
  plans: ServicePlan[];
  note: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    id: "learning",
    name: "Học Tập & Khóa Học",
    icon: "📚",
    services: [
      {
        name: "Duolingo Slot Super",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "425.000 đ" }],
        note: "👨‍👩‍👧‍👦 Nâng cấp qua Add Family. Vui lòng cung cấp Tên đăng nhập & Mật khẩu Duolingo. Trường hợp đăng nhập Google/Facebook, chúng tôi sẽ gửi liên kết mời tham gia Family.",
      },
      {
        name: "Family Duolingo",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "825.000 đ" }],
        note: "👑 Tài khoản Chính chủ. Cho phép thêm tối đa 5 thành viên. Khách hàng cần cung cấp Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Duolingo MAX",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "700.000 đ" }],
        note: "👨‍👩‍👧‍👦 Nâng cấp qua Add Family. Vui lòng cung cấp Tên đăng nhập & Mật khẩu Duolingo. Trường hợp đăng nhập Google/Facebook, chúng tôi sẽ gửi liên kết mời tham gia Family.",
      },
      {
        name: "Elsa Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "700.000 đ" },
        ],
        note: "🗣️ Nâng cấp trực tiếp trên TK chính chủ. Vui lòng cung cấp Tên đăng nhập & Mật khẩu. ⚠️ Lưu ý: Chỉ sử dụng tối đa trên 2 thiết bị.",
      },
      {
        name: "Elsa Pro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "585.000 đ" }],
        note: "🗣️ Nâng cấp trực tiếp trên TK chính chủ.",
      },
      {
        name: "Grammarly Edu (Có AI)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "265.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "400.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "585.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "595.000 đ" },
        ],
        note: "✍️ Nâng cấp trực tiếp trên Email Chính chủ (Không yêu cầu Mật khẩu). Gói cao cấp nhất, tích hợp AI và đầy đủ tính năng. 🔑 TK 12 tháng: Cấp sẵn, dùng riêng, đổi Mật Khẩu tùy ý. Chỉ sử dụng trên 1 thiết bị.",
      },
      {
        name: "Grammarly Pro (Không Có AI)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "225.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "300.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "355.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "505.000 đ" },
        ],
        note: "🔑 Tài khoản Cấp sẵn, dùng riêng.",
      },
      {
        name: "Grammarly Pro (Có AI)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "370.000 đ" }],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung. Sử dụng trên 1 thiết bị, vui lòng không thay đổi thông tin đăng nhập.",
      },
      {
        name: "Ejoy English Pro Plus",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "435.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "36 Tháng", price: "530.000 đ" },
        ],
        note: "📚 Tài khoản Cấp sẵn, dùng chung. Khách hàng được tạo 01 thẻ từ vựng riêng. ✅ Yêu cầu thanh toán trước.",
      },
      {
        name: "Quillbot Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "245.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "450.000 đ" },
        ],
        note: "🔄 Tài khoản Cấp sẵn, dùng chung. Vui lòng không thay đổi thông tin tài khoản.",
      },
      {
        name: "Memrise Lifetime",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "850.000 đ" }],
        note: "✉️ Acc Cấp sẵn/Tạo mới qua Email. Chúng tôi sẽ cấp tài khoản có sẵn, hoặc bạn gửi địa chỉ email để tạo tài khoản mới (Không hỗ trợ nâng cấp cho tài khoản cũ đã tồn tại).",
      },
      {
        name: "Quizizz",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "665.000 đ" }],
        note: "Khách hàng cần cung cấp tên đăng nhập và mật khẩu để nâng cấp - yêu cầu thanh toán trước.",
      },
      {
        name: "Scribd Premium",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "175.000 đ" }],
        note: "📖 Tài khoản Cấp sẵn, dùng riêng tư. Đảm bảo trải nghiệm đọc không bị gián đoạn.",
      },
      {
        name: "Busuu Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "385.000 đ" }],
        note: "💳 Nâng cấp trên TK Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu. Lưu ý: Yêu cầu thanh toán trước.",
      },
      {
        name: "Twinkl",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "Khách hàng cần cung cấp tên đăng nhập và mật khẩu để nâng cấp - yêu cầu thanh toán trước.",
      },
      {
        name: "Chegg (Study Pack)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "300.000 đ" }],
        note: "📚 Nâng cấp trên TK Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu. Lưu ý: Yêu cầu thanh toán trước.",
      },
      {
        name: "Blooket 10$",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🚀 Nâng cấp trực tiếp trên Tài Khoản Chính chủ. Vui lòng cung cấp Tên đăng nhập & Mật khẩu để thực hiện nâng cấp.",
      },
      {
        name: "Kahoot Gold (200 người)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "380.000 đ" }],
        note: "🥇 Nâng cấp trực tiếp trên TK Chính chủ. 🛑 KHÔNG hỗ trợ đăng nhập qua Google.",
      },
      {
        name: "Kahoot Silver (100 người)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "275.000 đ" }],
        note: "🥇 Nâng cấp trực tiếp trên TK Chính chủ.",
      },
      {
        name: "Kahoot One+ (800 người)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "460.000 đ" }],
        note: "🥇 Nâng cấp trực tiếp trên TK Chính chủ.",
      },
      {
        name: "Wordwall Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "290.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "755.000 đ" },
        ],
        note: "📝 Nâng cấp trực tiếp trên Tài Khoản Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu Wordwall.",
      },
      {
        name: "Wordwall Standard",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "240.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "670.000 đ" },
        ],
        note: "📝 Nâng cấp trực tiếp trên Tài Khoản Chính chủ.",
      },
      {
        name: "Skillshare Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "235.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "375.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "450.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "675.000 đ" },
        ],
        note: "💡 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "SketchUP Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "415.000 đ" }],
        note: "💻 Tài khoản Cấp sẵn, dùng riêng. ⚠️ Chỉ sử dụng được phiên bản Website, KHÔNG sử dụng được cho ứng dụng (APP).",
      },
      {
        name: "Hellochinese Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "690.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "750.000 đ" },
        ],
        note: "🔐 Tài khoản Cấp sẵn, dùng riêng. Cho phép đổi Mật khẩu, sử dụng tối đa trên 2 thiết bị. Yêu cầu thanh toán trước.",
      },
      {
        name: "Hellochinese Premium Plus",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "970.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "2.030.000 đ" },
        ],
        note: "🔐 Tài khoản Cấp sẵn, dùng riêng.",
      },
      {
        name: "Quizlet Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "275.000 đ" }],
        note: "📚 Tài khoản Cấp sẵn, dùng riêng. Chỉ sử dụng được 1 tháng. Sau thời hạn, cần đổi TK khác hoặc nâng cấp lên gói 1 năm.",
      },
      {
        name: "Quizlet Unlimited",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "335.000 đ" }],
        note: "👨‍🏫 Nâng cấp trên Tài khoản Chính chủ (Gói Teacher/Student đồng giá). Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Lingokids Fam (5 slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "500.000 đ" }],
        note: "👨‍👩‍👧‍👦 Nâng cấp Family (Không phải Tài khoản cá nhân). Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Codecademy Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "300.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "400.000 đ" },
        ],
        note: "💻 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Studocu Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung. Vui lòng KHÔNG thay đổi Mật khẩu hoặc bất kỳ thông tin đăng nhập nào.",
      },
      {
        name: "Datacamp Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "275.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "500.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "575.000 đ" },
        ],
        note: "📊 Nâng cấp trên Tài khoản Chính chủ. Chỉ cần cung cấp Email Datacamp (KHÔNG nhận đăng nhập qua Google). Bảo hành Fulltime.",
      },
      {
        name: "Coursera PLUS",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "175.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "585.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Năm", price: "795.000 đ" },
        ],
        note: "➕ Nâng cấp trên Tài khoản Chính chủ. Cần cung cấp Email và Mật khẩu Coursera. 🛑 Chỉ học được các khóa học thuộc gói PLUS.",
      },
      {
        name: "Tài khoản Coursera Business",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "175.000 đ" },
        ],
        note: "Tài khoản Coursera Business cấp sẵn.",
      },
      {
        name: "Notion Plus (không AI)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "📝 Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần cung cấp Email đăng nhập Notion.",
      },
      {
        name: "Gói AI của Notion",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "175.000 đ" }],
        note: "📝 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Notion Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "📝 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Notion Plus kèm AI",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "📝 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Notion Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "Vĩnh viễn", price: "Liên hệ" }],
        note: "🎓 Tài khoản Cấp sẵn, dùng riêng tư. Giao Full Email để đảm bảo quyền sở hữu vĩnh viễn.",
      },
      {
        name: "Turnitin Student",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "200.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "📧 Nâng cấp trên Email Chính chủ. ⚠️ Không bao gồm tính năng check AI (tối đa 30 lượt check mỗi ngày).",
      },
      {
        name: "Tải khóa học Udemy",
        plans: [{ accountType: "1 Khóa Học", duration: "Vĩnh viễn", price: "225.000 đ" }],
        note: "📥 Tải về dưới dạng Drive. Cần cung cấp Link khóa học + Gmail. Gửi về mail sau 2-4 tiếng.",
      },
      {
        name: "Udemy Personal Plan",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🔑 Tài khoản Cấp sẵn, dùng riêng. Bảo hành Fulltime 1 tháng. ⚠️ Gói này có tỷ lệ lỗi nhỏ, sẽ đổi TK mới ngay lập tức.",
      },
    ],
  },
  {
    id: "ai",
    name: "Công Nghệ & AI",
    icon: "🤖",
    services: [
      {
        name: "Perplexity AI Pro 20$",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "315.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "455.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "575.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "725.000 đ" },
        ],
        note: "Nâng cấp tài khoản chính chủ, khách hàng cần cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "ElevenLabs Creator",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "315.000 đ" }],
        note: "Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng. Bảo hành Fulltime 3 tháng.",
      },
      {
        name: "Kling AI STANDARD (6100 credit) + tặng Capcut 2 tháng",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "855.000 đ" }],
        note: "✅ Tài khoản Cấp sẵn, dùng riêng. Bảo hành Fulltime.",
      },
      {
        name: "Kling AI STANDARD (1156 credit)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "305.000 đ" }],
        note: "✅ Tài khoản Cấp sẵn, dùng riêng. Bảo hành Fulltime.",
      },
      {
        name: "Kling AI STANDARD (828 credit)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "255.000 đ" }],
        note: "✅ Tài khoản Cấp sẵn, dùng riêng. Bảo hành Fulltime.",
      },
      {
        name: "Super Grok",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "465.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "ChatGPT Plus (Gia hạn chính chủ)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "275.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp thông tin đăng nhập.",
      },
      {
        name: "ChatGPT Pro (Không bảo hành)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "135.000 đ" }],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung.",
      },
      {
        name: "ChatGPT Pro (Bảo hành)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "155.000 đ" }],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung.",
      },
      {
        name: "ChatGPT Pro + Capcut Pro 2 tuần (Team 5-7 slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "325.000 đ" }],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung. Vui lòng KHÔNG thay đổi bất kỳ thông tin đăng nhập nào.",
      },
      {
        name: "ChatGPT Plus (Bảo hành, TK chưa đăng ký gói)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "120.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Cần tài khoản chưa đăng ký gói bao giờ.",
      },
      {
        name: "ChatGPT Plus (Không bảo hành)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "90.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng.",
      },
      {
        name: "ChatGPT Plus (Bảo hành)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "1.800.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng hoặc nâng cấp chính chủ.",
      },
      {
        name: "ChatGPT Plus (Dùng chung 2 người)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "145.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng chung 2 người.",
      },
      {
        name: "ChatGPT GO",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Code GPT Grab",
        plans: [{ accountType: "Link Nâng Cấp", duration: "1 Tháng", price: "175.000 đ" }],
        note: "Acc nào cũng up được, nâng cấp cần tài khoản và mật khẩu ChatGPT.",
      },
      {
        name: "KREA AI (gói Basic - 9$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "305.000 đ" }],
        note: "Nâng cấp tài khoản chính chủ hoặc acc cấp sẵn, dùng riêng.",
      },
      {
        name: "KREA AI (gói Pro - 35$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "555.000 đ" }],
        note: "Nâng cấp tài khoản chính chủ.",
      },
      {
        name: "VEO3 (45.000 credit)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "395.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "305.000 đ" },
        ],
        note: "Cấp tài khoản, dùng riêng tư.",
      },
      {
        name: "VEO3 (25.000 credit)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "Liên hệ" }],
        note: "Cấp tài khoản, dùng riêng tư.",
      },
      {
        name: "VEO3 (1000 credit)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "185.000 đ" }],
        note: "Nâng cấp chính chủ.",
      },
      {
        name: "Gemini Pro - Google AI Pro + 2TB Google One",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "190.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "2 Tháng", price: "245.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "265.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "355.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "9 Tháng", price: "400.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "750.000 đ" },
        ],
        note: "⬆️ Nâng cấp trên Tài khoản Chính chủ. Chỉ cần cung cấp Địa Chỉ Gmail.",
      },
      {
        name: "Gemini Pro + Youtube Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "985.000 đ" }],
        note: "Combo Gemini Pro kèm Youtube Premium.",
      },
      {
        name: "PRO (17$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Business (30$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "SUNO AI Premier Gói 30$",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "1.270.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "405.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "905.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "1.575.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Năm", price: "3.000.000 đ" },
        ],
        note: "🔑 Tài khoản Cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Hailuo Pro (35$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "500.000 đ" }],
        note: "🔑 Tài Khoản Cấp Sẵn. KHÔNG THAY ĐỔI thông tin tài khoản. (Làm lâu)",
      },
      {
        name: "Hailuo Standard (10$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "285.000 đ" }],
        note: "🔑 Tài Khoản Cấp Sẵn. (Làm lâu)",
      },
      {
        name: "Heygen Creator 29$",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "595.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng.",
      },
      {
        name: "Krisp Pro",
        plans: [{ accountType: "Cấp sẵn dùng riêng", duration: "1 Tháng", price: "285.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Beautiful.ai Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "275.000 đ" }],
        note: "🔑 Tài khoản Cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Higgsfield AI Basic",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "Liên hệ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Higgsfield AI Pro",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "555.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Higgsfield AI Ultimate (tặng ChatGPT Plus)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "855.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Runway AI Standard",
        plans: [{ accountType: "Cấp sẵn dùng riêng", duration: "1 Tháng", price: "305.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Runway AI Pro",
        plans: [{ accountType: "Cấp sẵn dùng riêng", duration: "1 Tháng", price: "505.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Midjourney Share Slot 30$",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "405.000 đ" }],
        note: "🤝 Tài khoản Cấp sẵn, dùng chung. Mỗi khách hàng được tạo 1 server riêng.",
      },
      {
        name: "Midjourney Basic 10$",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "320.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng.",
      },
      {
        name: "Midjourney Standard 30$",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "755.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Veed Lite (19$/tháng)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "405.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Veed Pro (49$/tháng)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "19$",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Copilot Pro kèm Office 365",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "265.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "365.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "485.000 đ" },
        ],
        note: "🔑 Nhận Tài khoản Tạo sẵn (sử dụng riêng tư) hoặc Nâng cấp trực tiếp trên Tài khoản hiện tại.",
      },
    ],
  },
  {
    id: "entertainment",
    name: "Giải Trí",
    icon: "🎬",
    services: [
      {
        name: "Netflix 4K ULTRA HD",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "105.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "2 Tháng", price: "215.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "270.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "395.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "9 Tháng", price: "610.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "805.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "85.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "2 Tháng", price: "195.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "215.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "295.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "9 Tháng", price: "440.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "575.000 đ" },
        ],
        note: "🔑 Cấp 1 Profile (Mã PIN khách tự đặt). 🛑 KHÔNG được đổi Mật khẩu Tài khoản Netflix.",
      },
      {
        name: "Youtube Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "85.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "170.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "235.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "9 Tháng", price: "320.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "420.000 đ" },
        ],
        note: "❗ Chỉ hỗ trợ sử dụng tại Việt Nam. Nếu sử dụng ở nước ngoài sẽ bị lỗi.",
      },
      {
        name: "Youtube Premium + Gemini Pro (Combo 2 trong 1)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "785.000 đ" }],
        note: "Combo 2 trong 1.",
      },
      {
        name: "Tidal nâng cấp chính chủ",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "425.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "620.000 đ" },
        ],
        note: "🔑 Nâng cấp trực tiếp trên Tài khoản Chính Chủ. Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Spotify Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "120.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "185.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "285.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "9 Tháng", price: "300.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "370.000 đ" },
        ],
        note: "⬆️ Nâng cấp chính chủ trực tiếp trên tài khoản của khách. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Galaxy Play VIP (chính chủ)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "905.000 đ" }],
        note: "⬆️ Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu Galaxy.",
      },
      {
        name: "Galaxy Play VIP (SLOT)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "299.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "455.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "785.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "1.580.000 đ" },
        ],
        note: "🎬 Tài khoản tạo sẵn. Có Mã PIN riêng, nói không với hàng SCAN.",
      },
      {
        name: "TV360 gói Super VIP",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "2 Tháng", price: "140.000 đ" }],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản chính chủ.",
      },
      {
        name: "Apple Music",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "👑 Nâng cấp chính chủ (Add Family), không cần mật khẩu. 🌐 Cần chuyển hồ sơ sang quốc gia Nigeria. 🛡️ Bảo hành Fulltime.",
      },
      {
        name: "VTVCab ON",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "295.000 đ" }],
        note: "⬆️ Nâng cấp trên SĐT chính chủ. 🎁 Tặng kèm 1 tháng Cao Cấp + 1 tháng Cơ Bản. 📺 Tối đa 5 Tivi. 🌐 80+ kênh.",
      },
      {
        name: "Youku VIP",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "305.000 đ" }],
        note: "👑 Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Bumble Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "295.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "395.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "Vĩnh viễn", price: "Liên hệ" },
        ],
        note: "⬆️ Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "FPT Play SMax - Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "4 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "Liên hệ" },
        ],
        note: "📱 Cung cấp số điện thoại đăng nhập FPT Play để kích hoạt.",
      },
      {
        name: "FPT VVIP 1",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "185.000 đ" }],
        note: "📱 Nâng cấp chính chủ.",
      },
      {
        name: "FPT VVIP 2",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "205.000 đ" }],
        note: "📱 Nâng cấp chính chủ.",
      },
      {
        name: "FPT Play SVIP",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "635.000 đ" }],
        note: "📱 Nâng cấp chính chủ.",
      },
      {
        name: "Meitu SVIP dùng chung (1 máy)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "135.000 đ" }],
        note: "1 thiết bị cố định. Login quá thiết bị không bảo hành.",
      },
      {
        name: "Meitu SVIP tài khoản/chính chủ",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "170.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "555.000 đ" },
        ],
        note: "💥 Login được 2 thiết bị cố định. ⛔ Không bảo hành khóa TK vì đăng nhập quá thiết bị.",
      },
      {
        name: "Wink SVIP (1 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "Liên hệ" }],
        note: "1 thiết bị cố định, không hỗ trợ đổi.",
      },
      {
        name: "Wink SVIP/chính chủ",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "725.000 đ" },
        ],
        note: "Cung cấp tài khoản hoặc nâng cấp chính chủ, dùng IOS, PC - 2 thiết bị.",
      },
      {
        name: "Tinder Gold",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "385.000 đ" }],
        note: "💖 Cung cấp SĐT đăng nhập Tinder. ⚠️ Cần đăng xuất trước khi nâng cấp.",
      },
      {
        name: "Tinder Platinum",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "505.000 đ" }],
        note: "💖 Cung cấp SĐT đăng nhập Tinder.",
      },
      {
        name: "Gói MyTV K+",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" },
        ],
        note: "🌐 Yêu cầu mạng VNPT. 📺 Chỉ xem trên TIVI và Android. ⚽ Xem trọn mùa giải EPL.",
      },
      {
        name: "iQIYI Cao cấp VIP (SLOT)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "🎬 Tài khoản tạo sẵn. Sử dụng 1 slot riêng tư.",
      },
      {
        name: "iQIYI Cao cấp VIP chính chủ",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "👑 Cấp sẵn hoặc nâng cấp trực tiếp lên chính chủ.",
      },
      {
        name: "Vieon VIP (Slot)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "154.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "195.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "255.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "335.000 đ" },
        ],
        note: "📺 Tài khoản tạo sẵn. Sử dụng 1 kênh riêng (slot).",
      },
      {
        name: "Vieon VIP chính chủ",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "195.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "285.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "365.000 đ" },
        ],
        note: "⬆️ Nâng cấp chính chủ. Cung cấp SĐT và mật khẩu VieON.",
      },
      {
        name: "Vieon HBO (SLOT)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "120.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "255.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "295.000 đ" },
        ],
        note: "🎬 Tài khoản tạo sẵn. Nội dung HBO độc quyền.",
      },
      {
        name: "Vieon HBO chính chủ",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "415.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "505.000 đ" },
        ],
        note: "👑 Nâng cấp chính chủ. Cung cấp SĐT và mật khẩu VieON.",
      },
    ],
  },
  {
    id: "work",
    name: "Phục Vụ Công Việc",
    icon: "💼",
    services: [
      {
        name: "Office 365 1 năm (slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "165.000 đ" }],
        note: "Nâng cấp chính chủ, thêm vào nhóm gia đình (check mail tham gia).",
      },
      {
        name: "Office 365 Personal",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "405.000 đ" }],
        note: "Nâng cấp chính chủ (cần mật khẩu) - pay thẳng 1 năm.",
      },
      {
        name: "Family Office 365 1 năm (5 thành viên)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Năm", price: "455.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư, không đổi pass.",
      },
      {
        name: "Gamma Plus",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Gamma Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "225.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản chính chủ.",
      },
      {
        name: "Zoom Pro 100 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "125.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "215.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "385.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "595.000 đ" },
        ],
        note: "🛠️ Không thay đổi mật khẩu trong quá trình đăng ký. Nếu có 2FA, chọn Bỏ qua (Skip).",
      },
      {
        name: "Zoom Pro 300 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "365.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "855.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "1.905.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "2.975.000 đ" },
        ],
        note: "📧 Chỉ cần cung cấp email. Nhận email mời nâng cấp.",
      },
      {
        name: "Zoom Pro 500 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "📧 Chỉ cần cung cấp email.",
      },
      {
        name: "Zoom Pro 1000 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "2.775.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "📧 Chỉ cần cung cấp email.",
      },
      {
        name: "Claude AI Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "410.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "915.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "1.770.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Năm", price: "3.100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "600.000 đ" },
          { accountType: "Nâng Cấp Chính chủ (Max)", duration: "1 Tháng", price: "1.970.000 đ" },
        ],
        note: "Nâng cấp trên tài khoản chính chủ hoặc cấp TK dùng riêng.",
      },
      {
        name: "Github Copilot Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "1.005.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Năm", price: "1.870.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "2.775.000 đ" },
        ],
        note: "Tài khoản cấp sẵn hoặc nâng cấp chính chủ.",
      },
      {
        name: "Github Copilot Pro+",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "2.775.000 đ" }],
        note: "Nâng cấp chính chủ.",
      },
      {
        name: "Office 365 kèm 1TB OneDrive",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "255.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" },
        ],
        note: "📧 Chỉ cần cung cấp email. Bấm tham gia nhóm Office 365.",
      },
      {
        name: "Leetcode Premium (35$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "605.000 đ" }],
        note: "⬆️ Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Cursor AI Pro",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "405.000 đ" }],
        note: "Tài khoản tạo sẵn, dùng riêng. ❌ Không bật Usage-Based Spend. ❌ Không bật BugBot gói trả phí.",
      },
      {
        name: "Linkedin Business Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "565.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.978.000 đ" },
        ],
        note: "⬆️ Nâng cấp chính chủ hoặc qua Redeem Link. 🛡️ Chỉ bảo hành mất Sub/mất gói.",
      },
      {
        name: "Linkedin Career",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "734.000 đ" },
        ],
        note: "Nâng cấp chính chủ.",
      },
      {
        name: "Jetbrains Edu",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "335.000 đ" }],
        note: "💻 Cung cấp email đăng nhập và mật khẩu.",
      },
      {
        name: "Google Meet",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "305.000 đ" }],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản. (Không nhận chính chủ)",
      },
      {
        name: "Camscanner Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "375.000 đ" }],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản.",
      },
      {
        name: "Tradingview Premium",
        plans: [{ accountType: "Cấp sẵn dùng riêng", duration: "1 Tháng", price: "Liên hệ" }],
        note: "Tài khoản cấp sẵn, dùng riêng 1 tháng.",
      },
      {
        name: "Key Win 10/11 Pro Retail Online 1PC",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "12 Tháng", price: "Liên hệ" }],
        note: "🔑 Key tự nhập. Retail License: có thể tái sử dụng. ⚠️ Không BH đổi máy hoặc cài lại Win.",
      },
      {
        name: "Key Win 10/11 Pro OEM Online 1PC",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "12 Tháng", price: "Liên hệ" }],
        note: "🔑 Key tự nhập. OEM License: gắn vào phần cứng máy. ⚠️ Không BH đổi máy hoặc cài lại Win.",
      },
      {
        name: "Email domain (Business Starter) + 100GB GG One/Drive",
        plans: [
          { accountType: "Số lượng <10 mail", duration: "12 Tháng", price: "Liên hệ" },
          { accountType: "Số lượng 10-20 mail", duration: "12 Tháng", price: "Liên hệ" },
          { accountType: "Số lượng 20-50 mail", duration: "12 Tháng", price: "Liên hệ" },
          { accountType: "Số lượng trên 50 mail", duration: "12 Tháng", price: "Liên hệ" },
        ],
        note: "📧 Cung cấp username mail cần tạo và domain. 🔄 Hỗ trợ backup dữ liệu và chuyển đổi. 💼 Full hóa đơn VAT + Pháp lý.",
      },
    ],
  },
  {
    id: "storage",
    name: "Nâng Cấp Dung Lượng",
    icon: "☁️",
    services: [
      {
        name: "Google One 100GB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "255.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family. ⚠️ Mỗi email chỉ dùng Youtube hoặc Google One. 🚫 Không nâng cấp được nếu đã có Family.",
      },
      {
        name: "Google One 200GB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "510.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family.",
      },
      {
        name: "Google One 400GB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "715.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family.",
      },
      {
        name: "Google One 1TB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "995.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family.",
      },
      {
        name: "Google One 2TB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.385.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family.",
      },
      {
        name: "Google One 5TB (SLOT)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.585.000 đ" }],
        note: "📧 Cung cấp email để được mời tham gia Family.",
      },
      {
        name: "Google One Fam 5TB",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "1.755.000 đ" }],
        note: "👑 Tài khoản cấp Family, dùng riêng tư. Có thể thêm 5 thành viên.",
      },
      {
        name: "Google One Fam 2TB",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "935.000 đ" }],
        note: "👑 Tài khoản cấp Family, dùng riêng tư. Có thể thêm 5 thành viên.",
      },
      {
        name: "OneDrive 1TB",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "855.000 đ" }],
        note: "📧 Cung cấp email. Tham gia nhóm Office 365.",
      },
      {
        name: "Dropbox 10TB",
        plans: [{ accountType: "Chính chủ", duration: "1 Năm", price: "1.705.000 đ" }],
        note: "Gửi tài khoản bên mình nâng cấp.",
      },
      {
        name: "iCloud 400GB",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "439.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "885.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.885.000 đ" },
        ],
        note: "📧 Cung cấp mail iCloud. Gửi lời mời tham gia Family qua Email hoặc iMessage.",
      },
      {
        name: "iCloud 800GB",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "2.355.000 đ" }],
        note: "📧 Cung cấp mail iCloud.",
      },
    ],
  },
  {
    id: "design",
    name: "Đồ Họa",
    icon: "🎨",
    services: [
      {
        name: "Freepik login qua UltraViewer",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "Liên hệ" }],
        note: "🛠️ Cài đặt qua UltraViewer (Windows) / AnyDesk (Macbook). Cố định 1 thiết bị. Tải 30-70 file/ngày.",
      },
      {
        name: "Freepik cấp acc (2 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "Liên hệ" }],
        note: "👥 Tài khoản cấp sẵn, cho phép đăng nhập tối đa 2 thiết bị.",
      },
      {
        name: "Lightroom Mobile",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "965.000 đ" }],
        note: "⬆️ Nâng cấp trực tiếp trên tài khoản chính chủ. ⏳ Kích hoạt có thể mất thời gian.",
      },
      {
        name: "Filmora 12/13",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "375.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "36 Tháng", price: "510.000 đ" },
        ],
        note: "🔑 Tài khoản cấp sẵn, đăng nhập qua Google.",
      },
      {
        name: "Davinci cho Macbook (1 thiết bị)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "Vĩnh viễn", price: "975.000 đ" }],
        note: "💻 Cấp tài khoản App Store để tải ứng dụng. Sau đó đăng xuất. ⚠️ Không dùng được Windows.",
      },
      {
        name: "Canva Edu",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "70.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "2 Năm", price: "110.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Năm", price: "130.000 đ" },
        ],
        note: "📧 Chỉ cần cung cấp email. Thiết kế riêng tư. Có thể thiếu vài tính năng nâng cao (Font, AI, Brand Kit).",
      },
      {
        name: "Canva Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Năm", price: "200.000 đ" },
        ],
        note: "👑 Chỉ cung cấp email. Thiết kế riêng tư, có thêm Font, Brand Kit. Gói ổn định.",
      },
      {
        name: "Fam Canva Edu",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "Fam cấp sẵn, add mail khách vào làm quản trị viên (500 slots, không được add brandkit, font,...)",
      },
      {
        name: "Adobe ổn định (1 thiết bị)",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "170.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "230.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "615.000 đ" },
        ],
        note: "☁️ 250 Credit. Ổn định, không lỗi. Login qua UltraViewer/TeamViewer/AnyDesk. 80GB cloud.",
      },
      {
        name: "Adobe ổn định (2 thiết bị)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "Liên hệ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "1.000.000 đ" },
        ],
        note: "☁️ Login qua UltraViewer.",
      },
      {
        name: "Adobe ổn định (5 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "2.205.000 đ" }],
        note: "☁️ Login qua UltraViewer.",
      },
      {
        name: "Capcut Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "7 Ngày", price: "40.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "14 Ngày", price: "55.000 đ" },
          { accountType: "Cấp Sẵn (1 thiết bị)", duration: "28 Ngày", price: "70.000 đ" },
          { accountType: "Cấp Sẵn (2 thiết bị)", duration: "28 Ngày", price: "90.000 đ" },
          { accountType: "Cấp Sẵn (1 thiết bị)", duration: "6 Tháng", price: "315.000 đ" },
          { accountType: "Cấp Sẵn (2 thiết bị)", duration: "6 Tháng", price: "400.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "950.000 đ" },
        ],
        note: "⚠️ Không đổi email. Gỡ cài đặt và tải lại trước khi đăng nhập phiên bản mới nhất.",
      },
      {
        name: "Pacdora Lite (14$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "275.000 đ" }],
        note: "⬆️ Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Pacdora Pro (29$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "375.000 đ" }],
        note: "⬆️ Nâng cấp chính chủ.",
      },
      {
        name: "Figma Professional Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "365.000 đ" }],
        note: "🔒 Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Figma Pro Full Seat",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "235.000 đ" }],
        note: "Nâng cấp chính chủ - cần cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Picsart Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "355.000 đ" }],
        note: "🎨 Nâng cấp trực tiếp trên tài khoản khách hàng.",
      },
      {
        name: "Picsart Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "55.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "420.000 đ" },
        ],
        note: "🎨 Nâng cấp trực tiếp trên tài khoản khách hàng.",
      },
      {
        name: "Capture One PRO",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "📸 Key sử dụng đồng thời trên 3 máy. Kích hoạt trực tiếp trên TK chính chủ.",
      },
      {
        name: "Tài khoản Envato (33$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "Liên hệ" }],
        note: "👑 Nâng cấp trực tiếp trên tài khoản chính chủ.",
      },
      {
        name: "Corel 2024 (1 máy)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "605.000 đ" }],
        note: "🖥️ Cài đặt qua UltraViewer. Cố định 1 máy. Bảo hành Fulltime.",
      },
      {
        name: "Corel 2023/2022 (1 máy)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "555.000 đ" }],
        note: "🖥️ Cài đặt qua UltraViewer. Bảo hành Fulltime.",
      },
      {
        name: "Key Retouch4me - HEAL",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "Vĩnh viễn", price: "655.000 đ" }],
        note: "🔑 License 1 thiết bị, 1 Plugin. Bảo hành 1 năm. Cho phép tái kích hoạt.",
      },
      {
        name: "Key Retouch4me - Dodge&Burn",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "Vĩnh viễn", price: "755.000 đ" }],
        note: "🔑 License 1 thiết bị. Bảo hành 1 năm.",
      },
      {
        name: "Key Retouch4me (vĩnh viễn)",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "Vĩnh viễn", price: "885.000 đ" }],
        note: "🔑 License 1 thiết bị. Bảo hành 1 năm.",
      },
      {
        name: "Autocad",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "265.000 đ" }],
        note: "📧 Cung cấp email. Thêm vào Team để nâng cấp.",
      },
      {
        name: "Autodesk Lẻ 1 app",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "285.000 đ" }],
        note: "📧 Cung cấp email.",
      },
      {
        name: "Autodesk Lẻ 2 app",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "355.000 đ" }],
        note: "📧 Cung cấp email.",
      },
      {
        name: "Autodesk Full APP",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "415.000 đ" }],
        note: "📧 Cung cấp email.",
      },
    ],
  },
  {
    id: "vpn",
    name: "VPN & Bảo Mật",
    icon: "🛡️",
    services: [
      {
        name: "NORD VPN 10 thiết bị",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "355.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "160.000 đ" },
        ],
        note: "👑 Nâng cấp chính chủ hoặc cấp sẵn. 🚀 Tối đa 10 thiết bị. Được đổi mật khẩu.",
      },
      {
        name: "NordVPN 1 thiết bị",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "264.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "284.000 đ" },
        ],
        note: "🛡️ Tài khoản cấp sẵn. Không thay đổi mật khẩu.",
      },
      {
        name: "NordVPN 2-5 thiết bị",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "284.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "324.000 đ" },
        ],
        note: "🛡️ Tài khoản cấp sẵn. Không thay đổi mật khẩu.",
      },
      {
        name: "LastPass Cá nhân",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "555.000 đ" }],
        note: "🔑 Nâng cấp chính chủ hoặc cung cấp TK dùng riêng.",
      },
      {
        name: "LastPass Family",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "775.000 đ" }],
        note: "👨‍👩‍👧‍👦 Tài khoản Chính chủ, thêm tối đa 5 thành viên.",
      },
      {
        name: "1Password",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "24 Tháng", price: "625.000 đ" }],
        note: "⬆️ Nâng cấp chính chủ hoặc cấp TK dùng riêng.",
      },
      {
        name: "1Password Family (5 member)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "915.000 đ" }],
        note: "👨‍👩‍👧‍👦 Tài khoản Chính chủ, thêm tối đa 5 thành viên.",
      },
      {
        name: "Hotspot Shield Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "155.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "555.000 đ" },
        ],
        note: "🛡️ Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Express VPN (1 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "170.000 đ" }],
        note: "🚀 Tài khoản cấp sẵn.",
      },
      {
        name: "Express VPN (8 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "150.000 đ" }],
        note: "🚀 Tài khoản cấp sẵn, dùng riêng tối đa 8 thiết bị. Được đổi mật khẩu.",
      },
      {
        name: "PIA VPN",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "665.000 đ" }],
        note: "🔑 Tài khoản Cấp sẵn, dùng riêng tư.",
      },
      {
        name: "HMA VPN 1 thiết bị (Không dùng được iOS)",
        plans: [{ accountType: "Cấp Sẵn Key Dùng Riêng", duration: "12 Tháng", price: "155.000 đ" }],
        note: "🔑 Kích hoạt bằng Key.",
      },
      {
        name: "HMA VPN 5 thiết bị (Có thể dùng iOS)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "525.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "125.000 đ" },
        ],
        note: "🛡️ Tài khoản Cấp sẵn, dùng riêng. Tối đa 5 thiết bị, bao gồm iOS.",
      },
      {
        name: "Kaspersky Kid",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "275.000 đ" }],
        note: "🔑 Kích hoạt phần mềm bằng Key qua UltraViewer.",
      },
      {
        name: "Kaspersky VPN",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "325.000 đ" }],
        note: "🔑 Tài khoản cấp sẵn, dùng riêng.",
      },
      {
        name: "Kaspersky Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "365.000 đ" }],
        note: "📧 Nâng cấp trên Tài khoản Chính chủ. Add mail chính chủ để kích hoạt.",
      },
    ],
  },
  {
    id: "other",
    name: "Dịch Vụ Khác",
    icon: "⚡",
    services: [
      {
        name: "Chess Diamond",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "485.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Cung cấp Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Chess Platinum",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "585.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ.",
      },
      {
        name: "Vietmap Pro - Code kích hoạt",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "565.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "24 Tháng", price: "1.000.000 đ" },
        ],
        note: "🛡️ Gửi Code kích hoạt Vietmap. Cam kết bảo hành full, hàng chính hãng.",
      },
      {
        name: "Telegram Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Gửi Tên đăng nhập và Mật khẩu.",
      },
      {
        name: "Discord Nitro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.125.000 đ" }],
        note: "🔑 Nâng cấp trên Tài khoản Chính chủ. Gửi Tên đăng nhập và Mật khẩu.",
      },
    ],
  },
];
