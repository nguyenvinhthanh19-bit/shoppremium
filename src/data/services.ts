// Auto-generated from Vĩnh Thành Studio price sheet (27/04/2026)
export type ServicePlan = { accountType: string; duration: string; price: string; };
export type ServiceBrand = { color1: string; color2: string; emoji: string; };
export type Service = { sku: string; name: string; plans: ServicePlan[]; note: string; brand: ServiceBrand; };
export type Category = { id: string; name: string; icon: string; services: Service[]; };

export const categories: Category[] = [
  {
    "id": "learning",
    "name": "Học tập & Khóa học",
    "icon": "🎓",
    "services": [
      {
        "sku": "DUOLSLOTSU",
        "name": "Duolingo Slot Super",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.585.000 đ"
          }
        ],
        "note": "👨‍👩‍👧‍👦 Nâng cấp qua Add Family. Vui lòng cung cấp Tên đăng nhập & Mật khẩu Duolingo của bạn. Trường hợp đăng nhập Google/Facebook, chúng tôi sẽ gửi liên kết mời tham gia Family.",
        "brand": {
          "color1": "#58CC02",
          "color2": "#2f6b06",
          "emoji": "🦉"
        }
      },
      {
        "sku": "FAMIDUOL",
        "name": "Family Duolingo",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "2.785.000 đ"
          }
        ],
        "note": "👑 Tài khoản Chính chủ. Cho phép thêm tối đa 5 thành viên. Khách hàng cần cung cấp Tên đăng nhập & Mật khẩu.",
        "brand": {
          "color1": "#58CC02",
          "color2": "#2f6b06",
          "emoji": "🦉"
        }
      },
      {
        "sku": "DUOLMAX",
        "name": "Duolingo MAX",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "3.624.000 đ"
          }
        ],
        "note": "👨‍👩‍👧‍👦 Nâng cấp qua Add Family. Vui lòng cung cấp Tên đăng nhập & Mật khẩu Duolingo của bạn. Trường hợp đăng nhập Google/Facebook, chúng tôi sẽ gửi liên kết mời tham gia Family.",
        "brand": {
          "color1": "#58CC02",
          "color2": "#2f6b06",
          "emoji": "🦉"
        }
      },
      {
        "sku": "ELSAPREM",
        "name": "Elsa Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "850.000 đ"
          }
        ],
        "note": "🗣️ Nâng cấp trực tiếp trên TK chính chủ. Vui lòng cung cấp Tên đăng nhập & Mật khẩu. ⚠️ Lưu ý: Chỉ sử dụng tối đa trên 2 thiết bị.",
        "brand": {
          "color1": "#1DA1F2",
          "color2": "#0a5b8a",
          "emoji": "🗣️"
        }
      },
      {
        "sku": "ELSAPRO",
        "name": "Elsa Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.385.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#1DA1F2",
          "color2": "#0a5b8a",
          "emoji": "🗣️"
        }
      },
      {
        "sku": "GRAMEDUCO",
        "name": "Grammarly Edu (Có AI)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "265.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "3 Tháng",
            "price": "455.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "785.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "1.095.000 đ"
          }
        ],
        "note": "✍️ Nâng cấp trực tiếp trên Email Chính chủ (Không yêu cầu Mật khẩu). Gói cao cấp nhất, tích hợp AI và đầy đủ tính năng.",
        "brand": {
          "color1": "#15C39A",
          "color2": "#0a6b54",
          "emoji": "✍️"
        }
      },
      {
        "sku": "GRAMPROKHO",
        "name": "Grammarly Pro (Không Có AI)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "235.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "3 Tháng",
            "price": "345.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "555.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "785.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#15C39A",
          "color2": "#0a6b54",
          "emoji": "✍️"
        }
      },
      {
        "sku": "GRAMPROCO",
        "name": "Grammarly Pro (Có AI)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "374.000 đ"
          }
        ],
        "note": "🤝 Tài khoản Cấp sẵn, dùng chung. Sử dụng trên 1 thiết bị, vui lòng không thay đổi thông tin đăng nhập.",
        "brand": {
          "color1": "#15C39A",
          "color2": "#0a6b54",
          "emoji": "✍️"
        }
      },
      {
        "sku": "EJOYENGLPR",
        "name": "Ejoy English Pro Plus",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "495.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "36 Tháng",
            "price": "790.000 đ"
          }
        ],
        "note": "📚 Tài khoản Cấp sẵn, dùng chung. Khách hàng được tạo 01 thẻ từ vựng riêng. ✅ Yêu cầu thanh toán trước.",
        "brand": {
          "color1": "#FF6B6B",
          "color2": "#993f3f",
          "emoji": "🗯️"
        }
      },
      {
        "sku": "QUILPREM",
        "name": "Quillbot Premium",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "285.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "450.000 đ"
          }
        ],
        "note": "🔄 Tài khoản Cấp sẵn, dùng chung. Vui lòng không thay đổi thông tin tài khoản.",
        "brand": {
          "color1": "#1DA76A",
          "color2": "#0a5b3a",
          "emoji": "✒️"
        }
      },
      {
        "sku": "MEMRLIFE",
        "name": "Memrise Lifetime",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "950.000 đ"
          }
        ],
        "note": "✉️ Acc Cấp sẵn/Tạo mới qua Email. Chúng tôi sẽ cấp tài khoản có sẵn, hoặc bạn gửi địa chỉ email để tạo tài khoản mới (Không hỗ trợ nâng cấp cho tài khoản cũ đã tồn tại).",
        "brand": {
          "color1": "#FFCC4D",
          "color2": "#8a6b00",
          "emoji": "📚"
        }
      },
      {
        "sku": "QUIZ",
        "name": "Quizizz",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "665.000 đ"
          }
        ],
        "note": "Khách hàng cần cung cấp tên đăng nhập và mật khẩu đề nâng cấp - yêu cầu thanh toán trước",
        "brand": {
          "color1": "#8E2DE2",
          "color2": "#4a0e7d",
          "emoji": "❓"
        }
      },
      {
        "sku": "SCRIPREM",
        "name": "Scribd Premium",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "175.000 đ"
          }
        ],
        "note": "📖 Tài khoản Cấp sẵn, dùng riêng tư. Đảm bảo trải nghiệm đọc không bị gián đoạn.",
        "brand": {
          "color1": "#1A2B49",
          "color2": "#0a1424",
          "emoji": "📖"
        }
      },
      {
        "sku": "BUSUPREM",
        "name": "Busuu Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "385.000 đ"
          }
        ],
        "note": "💳 Nâng cấp trên TK Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu. Lưu ý: Yêu cầu thanh toán trước.",
        "brand": {
          "color1": "#0099E5",
          "color2": "#005780",
          "emoji": "🌍"
        }
      },
      {
        "sku": "CHEGSTUDPA",
        "name": "Chegg (Study Pack)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "300.000 đ"
          }
        ],
        "note": "📚 Nâng cấp trên TK Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu. Lưu ý: Yêu cầu thanh toán trước.",
        "brand": {
          "color1": "#FF6E00",
          "color2": "#993f00",
          "emoji": "📚"
        }
      },
      {
        "sku": "KAHO200NGU",
        "name": "Kahoot 200 người (Gold)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "380.000 đ"
          }
        ],
        "note": "🥇 Nâng cấp trực tiếp trên TK Chính chủ. Khách hàng cung cấp Tên đăng nhập & Mật khẩu. 🛑 Quan Trọng: KHÔNG hỗ trợ đăng nhập qua Google. (Vui lòng tham khảo thông tin gói tại: [ https://kahoot.com/register/kahoot-study-pricing/ ])",
        "brand": {
          "color1": "#46178F",
          "color2": "#240b4f",
          "emoji": "🎮"
        }
      },
      {
        "sku": "KAHO100NGU",
        "name": "Kahoot 100 người (Silver)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#46178F",
          "color2": "#240b4f",
          "emoji": "🎮"
        }
      },
      {
        "sku": "KAHO800NGU",
        "name": "Kahoot 800 người (One+)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "460.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#46178F",
          "color2": "#240b4f",
          "emoji": "🎮"
        }
      },
      {
        "sku": "WORDPRO",
        "name": "Wordwall Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "290.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "755.000 đ"
          }
        ],
        "note": "📝 Nâng cấp trực tiếp trên Tài Khoản Chính chủ. Khách hàng vui lòng cung cấp Tên đăng nhập & Mật khẩu Wordwall.",
        "brand": {
          "color1": "#FF8000",
          "color2": "#994d00",
          "emoji": "🔤"
        }
      },
      {
        "sku": "WORDSTAN",
        "name": "Wordwall Standard",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "240.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "670.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF8000",
          "color2": "#994d00",
          "emoji": "🔤"
        }
      },
      {
        "sku": "SKILPREM",
        "name": "Skillshare Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "235.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "375.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "450.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "675.000 đ"
          }
        ],
        "note": "💡 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#002333",
          "color2": "#000d12",
          "emoji": "💡"
        }
      },
      {
        "sku": "SKETEDU",
        "name": "SketchUP Edu",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "415.000 đ"
          }
        ],
        "note": "💻 Tài khoản Cấp sẵn, dùng riêng. ⚠️ Lưu ý quan trọng: Chỉ sử dụng được phiên bản Website, KHÔNG sử dụng được cho ứng dụng (APP).",
        "brand": {
          "color1": "#E84B00",
          "color2": "#822a00",
          "emoji": "📐"
        }
      },
      {
        "sku": "HELLPREM",
        "name": "Hellochinese Premium",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "690.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "750.000 đ"
          }
        ],
        "note": "🔐 Tài khoản Cấp sẵn, dùng riêng. Cho phép đổi Mật khẩu, sử dụng tối đa trên 2 thiết bị. Yêu cầu thanh toán trước.",
        "brand": {
          "color1": "#FF3B30",
          "color2": "#7a1c15",
          "emoji": "🐉"
        }
      },
      {
        "sku": "HELLPREMPL",
        "name": "Hellochinese Premium Plus (Premium +)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "970.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "2.030.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF3B30",
          "color2": "#7a1c15",
          "emoji": "🐉"
        }
      },
      {
        "sku": "QUIZPLUS",
        "name": "Quizlet Plus",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "📚 Tài khoản Cấp sẵn, dùng riêng. Chỉ sử dụng được 1 tháng. Sau thời hạn, khách hàng cần đổi Tài khoản khác hoặc thực hiện nâng cấp lên gói 1 năm.",
        "brand": {
          "color1": "#4255FF",
          "color2": "#1f2a99",
          "emoji": "📇"
        }
      },
      {
        "sku": "QUIZUNLI",
        "name": "Quizlet Unlimited",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "335.000 đ"
          }
        ],
        "note": "👨‍🏫 Nâng cấp trên Tài khoản Chính chủ (Gói Teacher/Student đồng giá). Vui lòng cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#4255FF",
          "color2": "#1f2a99",
          "emoji": "📇"
        }
      },
      {
        "sku": "LINGFAMADD",
        "name": "Lingokids Fam (add được 5 slot)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "500.000 đ"
          }
        ],
        "note": "👨‍👩‍👧‍👦 Nâng cấp Family (Không phải Tài khoản cá nhân). Vui lòng cung cấp Tên đăng nhập và Mật khẩu để chúng tôi thực hiện nâng cấp.",
        "brand": {
          "color1": "#FF6B6B",
          "color2": "#993f3f",
          "emoji": "🧒"
        }
      },
      {
        "sku": "CODEPRO",
        "name": "Codecademy Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "300.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "400.000 đ"
          }
        ],
        "note": "💻 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#1F4056",
          "color2": "#0a1a24",
          "emoji": "💻"
        }
      },
      {
        "sku": "DATAPREM",
        "name": "Datacamp Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "575.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "500.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "📊 Nâng cấp trên Tài khoản Chính chủ. Chỉ cần cung cấp Email Datacamp (KHÔNG nhận đăng nhập qua Google). Bảo hành Fulltime.",
        "brand": {
          "color1": "#03EF62",
          "color2": "#018a37",
          "emoji": "📊"
        }
      },
      {
        "sku": "COURPLUS",
        "name": "Coursera PLUS",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 năm",
            "price": "795.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 tháng",
            "price": "585.000 đ"
          }
        ],
        "note": "➕ Nâng cấp trên Tài khoản Chính chủ. Cần cung cấp Email và Mật khẩu Coursera. 🛑 LƯU Ý QUAN TRỌNG: Chỉ học được các khóa học thuộc gói PLUS. Vui lòng kiểm tra kỹ khóa học trước khi nâng cấp (Không hoàn tiền nếu không check kỹ).",
        "brand": {
          "color1": "#0056D2",
          "color2": "#002b6b",
          "emoji": "🎓"
        }
      },
      {
        "sku": "TAIKHOACOU",
        "name": "Tài khoản Coursera Business cấp sẵn",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 tháng",
            "price": "175.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#0056D2",
          "color2": "#002b6b",
          "emoji": "🎓"
        }
      },
      {
        "sku": "GOIAICUA",
        "name": "Gói AI của Notion",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "175.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "📝"
        }
      },
      {
        "sku": "TURNSTUD",
        "name": "Turnitin Student",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "255.000 đ"
          }
        ],
        "note": "📧 Nâng cấp trên Email Chính chủ. Nếu Tài khoản chưa được tạo, chỉ cần cung cấp Email. Nếu đã có Tài khoản, vui lòng gửi Full Email và Mật khẩu Turnitin. ⚠️ Lưu ý: Không bao gồm tính năng check AI (tối đa 30 lượt check mỗi ngày).",
        "brand": {
          "color1": "#162B47",
          "color2": "#0a1424",
          "emoji": "🔎"
        }
      },
      {
        "sku": "TAIKHOAHOC",
        "name": "Tải khóa học trên Udemy",
        "plans": [
          {
            "accountType": "1 Khóa Học",
            "duration": "1 Khóa Học",
            "price": "225.000 đ"
          }
        ],
        "note": "📥 Tải về dưới dạng Drive. Cần cung cấp Link khóa học + Gmail. Khóa học sẽ được gửi về mail dưới dạng Drive sau 2-4 tiếng.",
        "brand": {
          "color1": "#A435F0",
          "color2": "#5d1d8a",
          "emoji": "🎬"
        }
      }
    ]
  },
  {
    "id": "ai",
    "name": "AI & Giải trí",
    "icon": "🤖",
    "services": [
      {
        "sku": "PERPAIPRO",
        "name": "Perplexity AI Pro 20$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.725.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "1.575.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "1.455.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "315.000 đ"
          }
        ],
        "note": "Nâng cấp tài khoản chính chủ, khách hàng cần cung cấp tên đăng nhập và mật khẩu",
        "brand": {
          "color1": "#1FB8CD",
          "color2": "#0c6c79",
          "emoji": "🔍"
        }
      },
      {
        "sku": "ELEVCREA",
        "name": "ElevenLabs Creator",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "315.000 đ"
          }
        ],
        "note": "Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng. Bảo hành Fulltime 3 tháng.",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🔊"
        }
      },
      {
        "sku": "KLINAISTAN",
        "name": "Kling AI STANDARD (6100 credit) + tặng capcut 2 tháng",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "855.000 đ"
          }
        ],
        "note": "✅ Tài khoản Cấp sẵn, dùng riêng. Bảo hành Fulltime. Tài khoản đã có sẵn 828 credit để sử dụng ngay.",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "KLINAISTAN2",
        "name": "Kling AI STANDARD (1156 credit)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF4D8D",
          "color2": "#992c52",
          "emoji": "🎥"
        }
      },
      {
        "sku": "KLINAISTAN3",
        "name": "Kling AI STANDARD (828 credit)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "255.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF4D8D",
          "color2": "#992c52",
          "emoji": "🎥"
        }
      },
      {
        "sku": "SUPEGROK",
        "name": "Super Grok",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "465.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPLUSGI",
        "name": "ChatGPT Plus ( GIA HẠN CHÍNH CHỦ)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ. Vui lòng cung cấp thông tin đăng nhập để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPROKHO",
        "name": "ChatGPT Pro ( KHÔNG BẢO HÀNH)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "135.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPROBAO",
        "name": "ChatGPT Pro ( BẢO HÀNH)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "155.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPROTAN",
        "name": "ChatGPT Pro + Tặng capcut pro 2 tuần ( Cả Team 5-7 slot / BẢO HÀNH)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "325.000 đ"
          }
        ],
        "note": "🤝 Tài khoản Cấp sẵn, dùng chung. Vui lòng KHÔNG thay đổi bất kỳ thông tin đăng nhập nào.",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPLUSBA",
        "name": "ChatGPT Plus ( Bảo Hành và Cần tài khoản chưa đăng ký gói bao giờ )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "120.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPLUSKH",
        "name": "ChatGPT Plus ( KHÔNG BẢO HÀNH)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "90.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPLUSBA2",
        "name": "ChatGPT Plus ( BẢO HÀNH)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "100.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "1.800.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CHATPLUSDU",
        "name": "ChatGPT Plus ( DÙNG CHUNG 2 NGƯỜI )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "145.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "CODEGPTGRA",
        "name": "Code GPT Grab",
        "plans": [
          {
            "accountType": "Link Nâng Cấp",
            "duration": "1 Tháng",
            "price": "175.000 đ"
          }
        ],
        "note": "Acc nào cũng up được, nâng cấp cần tài khoản vs mật khẩu chat GPT",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "KREAAIGOI",
        "name": "KREA AI ( gói Basic - 9$ )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "Nâng cấp tài khoản chính chủ, khách hàng cần cung cấp tên đăng nhập và mật khẩu - nếu acc cấp thì là acc sẵn , dùng riêng",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎨"
        }
      },
      {
        "sku": "KREAAIGOI2",
        "name": "Krea AI ( gói Pro 35$ )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "555.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎨"
        }
      },
      {
        "sku": "VEO345000",
        "name": "VEO3 ( 45.000 credit )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 tháng",
            "price": "395.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#4285F4",
          "color2": "#1B5FAE",
          "emoji": "🎬"
        }
      },
      {
        "sku": "VEO31000CR",
        "name": "VEO3 ( 1000 credit )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "185.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#4285F4",
          "color2": "#1B5FAE",
          "emoji": "🎬"
        }
      },
      {
        "sku": "GEMIPROGOO",
        "name": "Gemini Pro - Google AI Pro Kèm 2TB dung lượng Google One",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "190.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "2 Tháng",
            "price": "380.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "460.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "920.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "9 Tháng",
            "price": "1.380.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.860.000 đ"
          }
        ],
        "note": "⬆️ Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần chỉ cần cung cấp Địa Chỉ Gmail để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#4285F4",
          "color2": "#1B5FAE",
          "emoji": "♊"
        }
      },
      {
        "sku": "GEMIPROKEM",
        "name": "Gemini Pro Kèm Youtube Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.950.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF0000",
          "color2": "#990000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "SUNOAIPREM",
        "name": "SUNO AI Premier Gói 30$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "2.870.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "605.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "3 tháng",
            "price": "1.305.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "2.025.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 năm",
            "price": "4.000.000 đ"
          }
        ],
        "note": "🔑 Tài khoản Cấp sẵn, dùng riêng tư.",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎼"
        }
      },
      {
        "sku": "HAILPRO35",
        "name": "Hailuo Pro (35$) (làm lâu nha)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "500.000 đ"
          }
        ],
        "note": "🔑 Tài Khoản Cấp Sẵn ( chúng tôi sẽ cung cấp Tên đăng nhập và Mật khẩu ). Lưu ý: Bạn vui lòng KHÔNG THAY ĐỔI thông tin tài khoản được cấp sẵn.",
        "brand": {
          "color1": "#0EA5E9",
          "color2": "#075a82",
          "emoji": "💧"
        }
      },
      {
        "sku": "HAILSTAN10",
        "name": "Hailuo Standard (10$) (làm lâu nha)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "285.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#0EA5E9",
          "color2": "#075a82",
          "emoji": "💧"
        }
      },
      {
        "sku": "HEYGCREA29",
        "name": "Heygen Creator 29$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "595.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng. Vui lòng cung cấp thông tin đăng nhập phù hợp với hình thức nâng cấp bạn chọn.",
        "brand": {
          "color1": "#FF6B35",
          "color2": "#993f1f",
          "emoji": "🎤"
        }
      },
      {
        "sku": "KRISPRO1",
        "name": "Krisp Pro 1 tháng",
        "plans": [
          {
            "accountType": "Cấp sẵn dùng riêng",
            "duration": "1 tháng",
            "price": "285.000 đ"
          }
        ],
        "note": "Tài khoản cấp sẵn, dùng riêng tư",
        "brand": {
          "color1": "#FFCD1C",
          "color2": "#998000",
          "emoji": "🎙️"
        }
      },
      {
        "sku": "BEAUAIEDU",
        "name": "Beautiful.ai Edu",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "🔑 Tài khoản Cấp sẵn, dùng riêng tư. Đảm bảo quyền truy cập tối ưu cho riêng bạn trong suốt thời hạn.",
        "brand": {
          "color1": "#FF5F6D",
          "color2": "#993742",
          "emoji": "✨"
        }
      },
      {
        "sku": "HIGGAICAP",
        "name": "Higgsfield AI cấp sẵn gói Pro",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 tháng",
            "price": "555.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#7C3AED",
          "color2": "#4a1f8a",
          "emoji": "🌌"
        }
      },
      {
        "sku": "HIGGAICAP2",
        "name": "Higgsfield AI cấp sẵn gói Ultimate (Được tặng chat gpt plus)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 tháng",
            "price": "855.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#10A37F",
          "color2": "#0a6b54",
          "emoji": "🤖"
        }
      },
      {
        "sku": "RUNWAICAP",
        "name": "Runway AI cấp acc (gói Standard)",
        "plans": [
          {
            "accountType": "Cấp sẵn dùng riêng",
            "duration": "1 tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "Tài khoản cấp sẵn, dùng riêng tư",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🚀"
        }
      },
      {
        "sku": "RUNWAICAP2",
        "name": "Runway AI cấp acc (gói Pro)",
        "plans": [
          {
            "accountType": "Cấp sẵn dùng riêng",
            "duration": "1 tháng",
            "price": "505.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🚀"
        }
      },
      {
        "sku": "MIDJSHARSL",
        "name": "Midjourney Share slot 30$",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "405.000 đ"
          }
        ],
        "note": "🤝 Tài khoản Cấp sẵn, dùng chung. Mỗi khách hàng được tạo 1 server riêng. Vui lòng đăng nhập qua Discord và gửi tên của bạn để chúng tôi tạo kênh riêng.",
        "brand": {
          "color1": "#0E0E0E",
          "color2": "#3D3D3D",
          "emoji": "🎨"
        }
      },
      {
        "sku": "MIDJBASI10",
        "name": "Midjourney Basic 10$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "320.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ hoặc nhận Tài khoản Cấp sẵn dùng riêng. Vui lòng cung cấp thông tin đăng nhập phù hợp với hình thức nâng cấp bạn chọn.",
        "brand": {
          "color1": "#0E0E0E",
          "color2": "#3D3D3D",
          "emoji": "🎨"
        }
      },
      {
        "sku": "MIDJSTAN30",
        "name": "Midjourney Standard 30$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "755.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#0E0E0E",
          "color2": "#3D3D3D",
          "emoji": "🎨"
        }
      },
      {
        "sku": "VEEDLITE19",
        "name": "Veed Lite (19$/tháng)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "405.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#1A5BFF",
          "color2": "#0a3299",
          "emoji": "🎞️"
        }
      },
      {
        "sku": "COPIPROKEM",
        "name": "Copilot Pro kèm Office 365",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "165.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "265.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "365.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "485.000 đ"
          }
        ],
        "note": "🔑 Bạn có thể chọn nhận Tài khoản Tạo sẵn (sử dụng riêng tư) hoặc Nâng cấp trực tiếp trên Tài khoản hiện tại của khách hàng.",
        "brand": {
          "color1": "#0078D4",
          "color2": "#004A82",
          "emoji": "🚁"
        }
      },
      {
        "sku": "NETF4KULTR",
        "name": "Netflix 4K ULTRA HD",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "175.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "2 Tháng",
            "price": "395.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "3 Tháng",
            "price": "270.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "395.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "9 Tháng",
            "price": "610.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "805.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "85.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "2 Tháng",
            "price": "195.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "3 Tháng",
            "price": "215.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "295.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "9 Tháng",
            "price": "440.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "575.000 đ"
          }
        ],
        "note": "🔑 Cấp 1 Profile (Mã PIN khách tự đặt). Đây là 1 slot trong Tài khoản Netflix cấp sẵn. 🛑 Lưu ý quan trọng: Quý khách KHÔNG được đổi Mật khẩu Tài khoản Netflix.",
        "brand": {
          "color1": "#E50914",
          "color2": "#831010",
          "emoji": "🎬"
        }
      },
      {
        "sku": "YOUTPREM",
        "name": "Youtube Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "75.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "470.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "535.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "9 Tháng",
            "price": "720.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.400.000 đ"
          }
        ],
        "note": "Nâng cấp chính chủ - đọc kỹ lưu ý bên dưới ❗❗❗ QUÝ KHÁCH HÀNG ĐỌC KỸ TRƯỚC KHI NÂNG CẤP  - Đối với gói này chỉ hỗ trợ cho những khách hàng sử dụng tại Việt Nam nếu sử dụng ở nước ngoài sẽ bị lỗi và vấn đề này shop chưa hỗ trợ được.",
        "brand": {
          "color1": "#FF0000",
          "color2": "#990000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "YOUTPREMGE",
        "name": "Youtube Premium + Gemini Pro ( COMBO 2 TRONG 1 )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.800.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FF0000",
          "color2": "#990000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "TIDANANGCA",
        "name": "Tidal nâng cấp chính chủ",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "425.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "620.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trực tiếp trên Tài khoản Chính Chủ của khách hàng. Vui lòng cung cấp Tên đăng nhập và Mật khẩu.",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎶"
        }
      },
      {
        "sku": "SPOTPREM",
        "name": "Spotify Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "120.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "185.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "285.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "9 Tháng",
            "price": "300.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "370.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp chính chủ trực tiếp trên tài khoản của khách. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu  để tiến hành nâng cấp.",
        "brand": {
          "color1": "#1DB954",
          "color2": "#0e6b30",
          "emoji": "🎵"
        }
      },
      {
        "sku": "GALAPLAYCH",
        "name": "Galaxy Play chính chủ (gói VIP)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "1.450.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu Galaxy để tiến hành kích hoạt.",
        "brand": {
          "color1": "#1E3A8A",
          "color2": "#0a1c4d",
          "emoji": "🌌"
        }
      },
      {
        "sku": "GALAPLAYSL",
        "name": "Galaxy Play SLOT (Gói VIP)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "1.580.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "785.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "3 Tháng",
            "price": "455.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "299.000 đ"
          }
        ],
        "note": "🎬 Tài khoản được tạo sẵn, Quý khách sử dụng 1 slot riêng tư trong tài khoản chung. Đảm bảo Slot ổn định, có Mã PIN riêng và nói không với hàng SCAN (tài khoản không rõ nguồn gốc).",
        "brand": {
          "color1": "#1E3A8A",
          "color2": "#0a1c4d",
          "emoji": "🌌"
        }
      },
      {
        "sku": "TV36GOISUP",
        "name": "TV360 gói Super Vip",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "2 Tháng",
            "price": "140.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp trực tiếp trên tài khoản chính chủ của khách hàng.",
        "brand": {
          "color1": "#E60012",
          "color2": "#7a000a",
          "emoji": "📺"
        }
      },
      {
        "sku": "VTVCON",
        "name": "VTVCab ON",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "295.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp trực tiếp trên SĐT chính chủ của Quý khách. 🎁 Ưu đãi Đặc biệt: Gói Cơ Bản được Tặng kèm 1 tháng Cao Cấp và 1 tháng Cơ Bản. 📺 Cho phép sử dụng đồng thời trên tối đa 5 Tivi. 🌐 Bao gồm hơn 80 kênh thiết yếu (VTV, VTVCab, BOX Movie, Quốc tế, HTV-HTVC, VTC, SCTV, địa phương...).",
        "brand": {
          "color1": "#E10600",
          "color2": "#7a0300",
          "emoji": "📺"
        }
      },
      {
        "sku": "YOUKVIP",
        "name": "Youku VIP",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "👑 Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để tiến hành kích hoạt.",
        "brand": {
          "color1": "#11AAEF",
          "color2": "#0a6d99",
          "emoji": "📺"
        }
      },
      {
        "sku": "BUMBPREM",
        "name": "Bumble Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "295.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "395.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để tiến hành kích hoạt.",
        "brand": {
          "color1": "#FFC629",
          "color2": "#998000",
          "emoji": "🐝"
        }
      },
      {
        "sku": "FPTPLAYGOI",
        "name": "FPT Play gói SMax - Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "165.000 đ"
          }
        ],
        "note": "📱 Dịch vụ nâng cấp chính chủ. Quý khách vui lòng cung cấp số điện thoại đăng nhập FPT Play để tiến hành kích hoạt.",
        "brand": {
          "color1": "#F37021",
          "color2": "#993f0f",
          "emoji": "🎬"
        }
      },
      {
        "sku": "FTPVVIP1",
        "name": "FTP VVIP 1",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "185.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "FPTVVIP2",
        "name": "FPT VVIP 2",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "205.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#F37021",
          "color2": "#993f0f",
          "emoji": "🎬"
        }
      },
      {
        "sku": "FPTPLAYSVI",
        "name": "FPT Play Svip",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "635.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#F37021",
          "color2": "#993f0f",
          "emoji": "🎬"
        }
      },
      {
        "sku": "MEITSVIPDU",
        "name": "Meitu SVIP dùng chung, 1 máy",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "239.000 đ"
          }
        ],
        "note": "1 thiết bị - cố định, không hỗ trợ đổi thiết bị khác  *** login quá thiết bị không bảo hành",
        "brand": {
          "color1": "#FF6B9D",
          "color2": "#993f5e",
          "emoji": "💄"
        }
      },
      {
        "sku": "MEITSVIPTA",
        "name": "Meitu SVIP tài khoản/chính chủ",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "370.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "1.775.000 đ"
          }
        ],
        "note": "💥 Login được 2 thiết bị cố định, chỉ dùng được cho 2 thiết bị cố định ‼ LƯU Ý QUAN TRỌNG: Bên mình chỉ bảo hành các vấn đề liên quan đến gói đăng ký như: Mất gói/mất sub ⛔ Không bảo hành liên quan đến các lỗi sau: Khóa tài khoản vì đăng nhập quá thiết bị (limit thiết bị)",
        "brand": {
          "color1": "#FF6B9D",
          "color2": "#993f5e",
          "emoji": "💄"
        }
      },
      {
        "sku": "WINKSVIPCH",
        "name": "Wink SVIP/chính chủ",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "725.000 đ"
          }
        ],
        "note": "Bên mình cung cấp tài khoản cho bạn đăng nhập hoặc nâng cấp chính chủ, dùng được cho IOS, PC - dùng 2 thiết bị",
        "brand": {
          "color1": "#9C27B0",
          "color2": "#5d1769",
          "emoji": "📺"
        }
      },
      {
        "sku": "TINDGOLD",
        "name": "Tinder Gold",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "385.000 đ"
          }
        ],
        "note": "💖 Để tiến hành nâng cấp, Quý khách vui lòng cung cấp số điện thoại đăng nhập Tinder (Hoặc tạo tài khoản nếu chưa có). ⚠️ Lưu ý quan trọng: Quý khách cần đăng xuất tài khoản trên thiết bị của mình trước khi gửi yêu cầu nâng cấp.",
        "brand": {
          "color1": "#FD297B",
          "color2": "#991948",
          "emoji": "🔥"
        }
      },
      {
        "sku": "TINDPLAT",
        "name": "Tinder Platinum",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "505.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FD297B",
          "color2": "#991948",
          "emoji": "🔥"
        }
      },
      {
        "sku": "VIEOVIPSLO",
        "name": "Vieon Vip (Slot)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "154.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "3 Tháng",
            "price": "195.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "255.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "335.000 đ"
          }
        ],
        "note": "📺 Tài khoản được tạo sẵn, Quý khách đăng nhập và sử dụng 1 kênh riêng (slot) để đảm bảo trải nghiệm xem cá nhân và ổn định.",
        "brand": {
          "color1": "#FFD600",
          "color2": "#998000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "VIEOVIPCHI",
        "name": "Vieon Vip chính chủ",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "195.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "285.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "365.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp số điện thoại và mật khẩu VieON để tiến hành kích hoạt.",
        "brand": {
          "color1": "#FFD600",
          "color2": "#998000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "VIEOHBOSLO",
        "name": "Vieon HBO (SLOT)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "120.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "3 Tháng",
            "price": "255.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "295.000 đ"
          }
        ],
        "note": "🎬 Tài khoản được tạo sẵn, Quý khách đăng nhập và sử dụng 1 kênh riêng (slot) để tận hưởng nội dung HBO độc quyền.",
        "brand": {
          "color1": "#FFD600",
          "color2": "#998000",
          "emoji": "▶️"
        }
      },
      {
        "sku": "VIEOHBOCHI",
        "name": "Vieon HBO chính chủ",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "505.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "415.000 đ"
          }
        ],
        "note": "👑 Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp số điện thoại và mật khẩu VieON để tiến hành kích hoạt.",
        "brand": {
          "color1": "#FFD600",
          "color2": "#998000",
          "emoji": "▶️"
        }
      }
    ]
  },
  {
    "id": "work",
    "name": "Công việc & Văn phòng",
    "icon": "💼",
    "services": [
      {
        "sku": "OFFI3651",
        "name": "Office 365 1 năm (slot)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "165.000 đ"
          }
        ],
        "note": "Nâng cấp chính chủ, thêm vào nhóm gia đình (sau khi mời thì check mail tham gia)",
        "brand": {
          "color1": "#D83B01",
          "color2": "#7a2200",
          "emoji": "📄"
        }
      },
      {
        "sku": "OFFI365PER",
        "name": "Office 365 Personal",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "405.000 đ"
          }
        ],
        "note": "Nâng cấp chính chủ (cần mật khẩu) - pay thẳng  1 năm luôn",
        "brand": {
          "color1": "#D83B01",
          "color2": "#7a2200",
          "emoji": "📄"
        }
      },
      {
        "sku": "FAMIOFFI36",
        "name": "Family office 365 1 năm (add 5 thành viên)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 năm",
            "price": "455.000 đ"
          }
        ],
        "note": "Tài khoản cấp sẵn, dùng riêng tư, không đổi pass",
        "brand": {
          "color1": "#D83B01",
          "color2": "#7a2200",
          "emoji": "📄"
        }
      },
      {
        "sku": "GAMMPLUS",
        "name": "Gamma Plus",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "165.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp trực tiếp trên tài khoản chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để tiến hành kích hoạt.",
        "brand": {
          "color1": "#7B1FA2",
          "color2": "#460c5e",
          "emoji": "💎"
        }
      },
      {
        "sku": "GAMMPRO",
        "name": "Gamma Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "225.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#7B1FA2",
          "color2": "#460c5e",
          "emoji": "💎"
        }
      },
      {
        "sku": "ZOOMPRO100",
        "name": "Zoom Pro 100 người",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "125.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "215.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "385.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "595.000 đ"
          }
        ],
        "note": "🛠️ Để đảm bảo quá trình nâng cấp và hỗ trợ kỹ thuật diễn ra nhanh chóng và thuận lợi:\r Vui lòng không thay đổi mật khẩu trong suốt quá trình đăng ký gói ban đầu.\r Nếu có bất kỳ thay đổi mật khẩu nào sau đó, Quý khách vui lòng thông báo lại cho chúng tôi để được hỗ trợ kịp thời.\r 🛡️ Sau khi nâng cấp, nếu hệ thống yêu cầu Xác thực 2 yếu tố (2FA), Quý khách vui lòng chọn \"Bỏ qua (Skip)\" và sử dụng tài khoản như bình thường.",
        "brand": {
          "color1": "#2D8CFF",
          "color2": "#0d4f99",
          "emoji": "📹"
        }
      },
      {
        "sku": "ZOOMPRO300",
        "name": "Zoom Pro 300 người",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "365.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "855.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 Tháng",
            "price": "1.905.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "2.975.000 đ"
          }
        ],
        "note": "📧 Quý khách chỉ cần cung cấp địa chỉ email. Sau khi hoàn tất nâng cấp, Quý khách sẽ nhận được email mời nâng cấp gửi về Gmail và chỉ cần bấm nâng cấp từ thư mời đó là có thể sử dụng.",
        "brand": {
          "color1": "#2D8CFF",
          "color2": "#0d4f99",
          "emoji": "📹"
        }
      },
      {
        "sku": "ZOOMPRO1002",
        "name": "Zoom Pro 1000 người",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "2.775.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#2D8CFF",
          "color2": "#0d4f99",
          "emoji": "📹"
        }
      },
      {
        "sku": "CLAUAIPRO",
        "name": "Claude AI pro (cấp sẵn, dùng riêng)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 tháng",
            "price": "410.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "3 Tháng",
            "price": "915.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "1.770.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 năm",
            "price": "3.100.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "600.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "1.970.000 đ"
          }
        ],
        "note": "Nâng cấp trên tài khoản chính chủ, khách hàng cần cung cấp tên đăng nhập và mật khẩu- Hoặc cấp tk dùng riêng",
        "brand": {
          "color1": "#D97757",
          "color2": "#7a4030",
          "emoji": "🧠"
        }
      },
      {
        "sku": "GITHCOPIPR",
        "name": "Github Copilot Pro",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "305.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 tháng",
            "price": "1.005.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 năm",
            "price": "1.870.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "2.775.000 đ"
          }
        ],
        "note": "Xem các gói đăng ký tại: https://github.com/features/copilot/plans?cft=copilot_lo.features_copilot",
        "brand": {
          "color1": "#24292E",
          "color2": "#0f1112",
          "emoji": "🐙"
        }
      },
      {
        "sku": "GITHCOPIPR2",
        "name": "Github Copilot Pro +",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 tháng",
            "price": "2.775.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#24292E",
          "color2": "#0f1112",
          "emoji": "🐙"
        }
      },
      {
        "sku": "OFFI365KEM",
        "name": "Office 365 kèm 1TB onedrive",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "255.000 đ"
          }
        ],
        "note": "📧 Quý khách chỉ cần cung cấp địa chỉ mail cần nâng cấp. Sau khi chúng tôi báo hoàn tất, Quý khách vui lòng kiểm tra email và bấm tham gia nhóm Office 365 là có thể sử dụng ngay.",
        "brand": {
          "color1": "#D83B01",
          "color2": "#7a2200",
          "emoji": "📄"
        }
      },
      {
        "sku": "LEETPREMGO",
        "name": "Leetcode Premium (Gói 35$)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "605.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để tiến hành kích hoạt.",
        "brand": {
          "color1": "#FFA116",
          "color2": "#996300",
          "emoji": "🧩"
        }
      },
      {
        "sku": "CURSAI",
        "name": "Cursor AI",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 tháng",
            "price": "405.000 đ"
          }
        ],
        "note": "Tài khoản tạo sẵn, dùng riêng ‼ LƯU Ý KHI MUA TÀI KHOẢN CURSOR PRO BÊN SHOP ❌ Không bật \"Usage-Based Spend\" -> bật = Không Bảo Hành ❌ Không bật BugBot gói trả phí và không tjw ý nâng lên gói Pro+ hoặc gói Ultra  💡 Mẹo dùng Cursor AI tối ưu: Để dùng tối ưu credit nhất hãy : claude ~> gpt ~> grok ~> auto ~> gpt 5 mini (có vẻ là dc tiệm cận với auto nhất, vì giờ auto k unlimited req nữa r)",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "✨"
        }
      },
      {
        "sku": "LINKBUSIPR",
        "name": "Linkedin Business Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "565.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.978.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp trực tiếp trên tài khoản chính chủ của Quý khách với hai hình thức linh hoạt: Hình thức 1: Quý khách cung cấp tài khoản và mật khẩu để chúng tôi đăng nhập và thực hiện nâng cấp. Hình thức 2: Chúng tôi gửi Redeem Link (link nâng cấp), Quý khách chỉ cần đăng nhập và nhấp vào link để nâng cấp lên Premium. 🛡️ Chính sách Bảo hành: Chúng tôi chỉ bảo hành các vấn đề liên quan đến gói đăng ký (mất Sub/mất gói). ❌ Không bảo hành đối với các lỗi sau: Tài khoản chưa xác thực số điện thoại/CCCD không khớp với thông tin tài khoản. Tài khoản bị cấm/ban do khách hàng đăng nhập trên nhiều IP hoặc thiết bị khác nhau (vi phạm chính sách sử dụng).",
        "brand": {
          "color1": "#0A66C2",
          "color2": "#053a6b",
          "emoji": "💼"
        }
      },
      {
        "sku": "LINKCARE",
        "name": "Linkedin Career",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "734.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#0A66C2",
          "color2": "#053a6b",
          "emoji": "💼"
        }
      },
      {
        "sku": "JETBEDU",
        "name": "Jetbrains Edu",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "335.000 đ"
          }
        ],
        "note": "💻 Dịch vụ yêu cầu Quý khách cung cấp email đăng nhập và mật khẩu để tiến hành kích hoạt. Xem thông tin chi tiết về gói tại đây: https://www.jetbrains.com/community/education/#students",
        "brand": {
          "color1": "#FF318C",
          "color2": "#991e54",
          "emoji": "💻"
        }
      },
      {
        "sku": "GOOGKHONNH",
        "name": "Google (Không nhận chính chủ)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "305.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp trực tiếp trên tài khoản. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để thực hiện kích hoạt.",
        "brand": {
          "color1": "#4285F4",
          "color2": "#1B5FAE",
          "emoji": "🌐"
        }
      },
      {
        "sku": "CAMSPREM",
        "name": "Camscanner Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "375.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp trực tiếp trên tài khoản. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để thực hiện kích hoạt.",
        "brand": {
          "color1": "#FF6B00",
          "color2": "#993f00",
          "emoji": "📄"
        }
      }
    ]
  },
  {
    "id": "storage",
    "name": "Dung lượng & Lưu trữ",
    "icon": "☁️",
    "services": [
      {
        "sku": "GOOGONE100",
        "name": "Google One 100GB (SLOT)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "255.000 đ"
          }
        ],
        "note": "📧 Quý khách vui lòng cung cấp địa chỉ email để được mời tham gia Family.\r ⚠️ Lưu ý quan trọng: Mỗi email chỉ sử dụng được cho Youtube hoặc Google One (không dùng đồng thời).\r 🚫 Không nâng cấp được nếu quý khách đã có Family hoặc đang tham gia Family khác.",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONE200",
        "name": "Google One 200GB (SLOT)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "535.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONE400",
        "name": "Google One 400GB (SLOT)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "715.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONE1TB",
        "name": "Google One 1TB (SLOT)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "995.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONE2TB",
        "name": "Google One 2TB (SLOT)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.385.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONE5TB",
        "name": "Google One 5TB ( SLOT )",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.585.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONEFAM",
        "name": "Google one Fam 5TB",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "1.755.000 đ"
          }
        ],
        "note": "👑 Tài khoản cấp Family, được tạo bằng email riêng của chúng tôi, đảm bảo sử dụng riêng tư. Có thể thêm được 5 thành viên khác.",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "GOOGONEFAM2",
        "name": "Google One Fam 2TB",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "935.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#34A853",
          "color2": "#1f6b32",
          "emoji": "📦"
        }
      },
      {
        "sku": "ONEDRIV1TB",
        "name": "One Drive 1TB",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "855.000 đ"
          }
        ],
        "note": "📧 Quý khách chỉ cần cung cấp địa chỉ email cần nâng cấp. Sau khi nhận được thông báo hoàn tất, quý khách vui lòng kiểm tra email và nhấp vào liên kết để tham gia nhóm Office 365.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "DROP10TB",
        "name": "Dropbox 10TB",
        "plans": [
          {
            "accountType": "Chính chủ",
            "duration": "1 năm",
            "price": "1.705.000 đ"
          }
        ],
        "note": "Gửi tài khoản bên mình nâng cấp",
        "brand": {
          "color1": "#0061FF",
          "color2": "#003a99",
          "emoji": "📦"
        }
      },
      {
        "sku": "ICLO400G",
        "name": "Icloud 400GB",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.885.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "439.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "6 tháng",
            "price": "885.000 đ"
          }
        ],
        "note": "📧 Quý khách vui lòng cung cấp địa chỉ mail iCloud. Chúng tôi sẽ gửi lời mời tham gia Family qua Email hoặc iMessage để hoàn tất kích hoạt.",
        "brand": {
          "color1": "#3693F3",
          "color2": "#1a5599",
          "emoji": "☁️"
        }
      },
      {
        "sku": "ICLO800G",
        "name": "Icloud 800GB",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "2.355.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#3693F3",
          "color2": "#1a5599",
          "emoji": "☁️"
        }
      }
    ]
  },
  {
    "id": "design",
    "name": "Đồ hoạ & Sáng tạo",
    "icon": "🎨",
    "services": [
      {
        "sku": "LIGHMOBI",
        "name": "Lightroom Mobile",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "965.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ Nâng cấp trực tiếp trên tài khoản chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để thực hiện. ⏳ Lưu ý: Quá trình kích hoạt có thể mất nhiều thời gian hơn bình thường.",
        "brand": {
          "color1": "#001E36",
          "color2": "#0a3658",
          "emoji": "📷"
        }
      },
      {
        "sku": "FILM1213",
        "name": "Filmora 12 / 13",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "375.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "36 Tháng",
            "price": "510.000 đ"
          }
        ],
        "note": "🔑 Tài khoản được cấp sẵn, sử dụng phương thức đăng nhập qua Google (login = Google).",
        "brand": {
          "color1": "#A435F0",
          "color2": "#5d1d8a",
          "emoji": "🎞️"
        }
      },
      {
        "sku": "DAVICHOMAC",
        "name": "Davinci cho Macbook (1 thiết bị)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "Vĩnh viễn",
            "price": "975.000 đ"
          }
        ],
        "note": "💻 Chúng tôi sẽ cấp tài khoản đăng nhập App Store để tải ứng dụng. Sau khi tải, quý khách vui lòng đăng xuất tài khoản App Store. 📖 (Xem Hướng dẫn: Davinci HD ⚠️ Lưu ý: Sản phẩm không sử dụng được cho hệ điều hành WINDOWS.",
        "brand": {
          "color1": "#233A4F",
          "color2": "#0e1c2a",
          "emoji": "🎬"
        }
      },
      {
        "sku": "CANVEDU",
        "name": "Canva Edu",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "90.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "2 năm",
            "price": "180.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 năm",
            "price": "260.000 đ"
          }
        ],
        "note": "📧 Quý khách chỉ cần cung cấp địa chỉ email. Chúng tôi sẽ thêm quý khách vào nhóm. Đảm bảo thiết kế vẫn riêng tư, không ai có thể xem được. Lưu ý: Phiên bản này tính năng ổn định nhưng có thể thiếu một vài tính năng nâng cao (như thêm Font, AI, Brand Kit).",
        "brand": {
          "color1": "#00C4CC",
          "color2": "#006B70",
          "emoji": "🎨"
        }
      },
      {
        "sku": "CANVPRO",
        "name": "Canva Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 năm",
            "price": "150.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 năm",
            "price": "450.000 đ"
          }
        ],
        "note": "👑 Quý khách chỉ cần cung cấp địa chỉ email. Chúng tôi sẽ thêm quý khách vào nhóm. Đảm bảo thiết kế vẫn riêng tư và có thể thêm Font, Brand Kit. Đây là gói ổn định với rất ít lỗi.",
        "brand": {
          "color1": "#00C4CC",
          "color2": "#006B70",
          "emoji": "🎨"
        }
      },
      {
        "sku": "ADOB80GBCL",
        "name": "Adobe 80GB cloud, ổn định, không lỗi 1 năm (cấp sẵn)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "350.000 đ"
          }
        ],
        "note": "☁️ Bao gồm 250 Credit để sử dụng. Dịch vụ đảm bảo ổn định, không lỗi và yêu cầu không thay đổi thông tin tài khoản để duy trì dịch vụ.\r ⚙️ Quy trình nâng cấp: Quý khách cung cấp thông tin đăng nhập qua UltraViewer/TeamViewer/AnyDesk, chúng tôi sẽ thực hiện đăng nhập và cài đặt hoàn tất.",
        "brand": {
          "color1": "#FA0F00",
          "color2": "#960800",
          "emoji": "🅰️"
        }
      },
      {
        "sku": "TOTNHATHIE",
        "name": "Tốt nhất hiện tại* Gói Adobe ổn định không lỗi 6 tháng (Login qua ultraview) (1 thiết bị)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "430.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FA0F00",
          "color2": "#960800",
          "emoji": "🅰️"
        }
      },
      {
        "sku": "TOTNHATHIE2",
        "name": "*Tốt nhất hiện tại* Gói Adobe ổn định không lỗi 1 năm (Login qua ultraview) (1 thiết bị)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "915.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FA0F00",
          "color2": "#960800",
          "emoji": "🅰️"
        }
      },
      {
        "sku": "TOTNHATHIE3",
        "name": "*Tốt nhất hiện tại* Gói Adobe ổn định không lỗi 1 năm (Login qua ultraview) (2 thiết bị)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "2.000.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FA0F00",
          "color2": "#960800",
          "emoji": "🅰️"
        }
      },
      {
        "sku": "TOTNHATHIE4",
        "name": "*Tốt nhất hiện tại* Gói Adobe ổn định không lỗi 1 năm (Login qua ultraview) (5 thiết bị)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "2.705.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FA0F00",
          "color2": "#960800",
          "emoji": "🅰️"
        }
      },
      {
        "sku": "CAPCPRO7",
        "name": "Capcut Pro 7 ngày",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "7 Ngày",
            "price": "40.000 đ"
          }
        ],
        "note": "⚠️ Lưu ý quan trọng: Shop không bảo hành nếu khách hàng đổi email của tài khoản. Trước khi đăng nhập, vui lòng gỡ cài đặt và tải lại ứng dụng để đảm bảo sử dụng phiên bản Capcut mới nhất.",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "CAPCPRO14",
        "name": "Capcut Pro 14 ngày",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "14 Ngày",
            "price": "55.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "CAPCPRO28",
        "name": "Capcut Pro 28 ngày ( 1 thiết bị )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "28 Ngày",
            "price": "70.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "CAPCPRO2",
        "name": "Capcut Pro ( 2 thiết bị )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "28 Ngày",
            "price": "90.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "400.000 đ"
          }
        ],
        "note": "(Gói cá nhân, Full tính năng, có Credit, sử dụng được tính năng AI)  ‼ Ưu tiên khách hàng tự change để tránh mất 1 thiết bị khi bên mình login (nếu muốn bên mình hỗ trợ up chính chủ thì nhận mail chưa tạo capcut ạ) -  Cấp full mail, tự đọc code",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "CAPCPRO1",
        "name": "Capcut Pro ( 1 thiết bị )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "6 Tháng",
            "price": "315.000 đ"
          }
        ],
        "note": "Gói team (tài khoản cấp sẵn, dùng riêng)",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "CAPCPRO",
        "name": "Capcut Pro",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "950.000 đ"
          }
        ],
        "note": "🔒 Tài khoản được cấp sẵn, đảm bảo sử dụng riêng tư (private use).",
        "brand": {
          "color1": "#FE2858",
          "color2": "#971a37",
          "emoji": "✂️"
        }
      },
      {
        "sku": "PACDLITE14",
        "name": "Pacdora Lite 14$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp chính chủ. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu để thực hiện kích hoạt.",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "📦"
        }
      },
      {
        "sku": "PACDPRO29",
        "name": "Pacdora Pro 29$",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "375.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "📦"
        }
      },
      {
        "sku": "FIGMPROFGO",
        "name": "Figma Profesional gói Edu",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "365.000 đ"
          }
        ],
        "note": "🔒 Tài khoản được cấp sẵn, đảm bảo sử dụng riêng tư (private use).",
        "brand": {
          "color1": "#F24E1E",
          "color2": "#A5300A",
          "emoji": "🎨"
        }
      },
      {
        "sku": "FIGMPROGOI",
        "name": "Figma Pro gói full seat",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "235.000 đ"
          }
        ],
        "note": "Nâng cấp chính chủ - cần cung cấp tên đăng nhập và mật khẩu",
        "brand": {
          "color1": "#F24E1E",
          "color2": "#A5300A",
          "emoji": "🎨"
        }
      },
      {
        "sku": "PICSPLUS",
        "name": "Picsart Plus",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "355.000 đ"
          }
        ],
        "note": "🎨 Dịch vụ nâng cấp trực tiếp trên tài khoản khách hàng đang sử dụng. Quý khách vui lòng cung cấp tên đăng nhập và mật khẩu Picsart để thực hiện kích hoạt.",
        "brand": {
          "color1": "#C209C1",
          "color2": "#6c0570",
          "emoji": "📸"
        }
      },
      {
        "sku": "PICSPRO",
        "name": "Picsart Pro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "55.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "420.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#C209C1",
          "color2": "#6c0570",
          "emoji": "📸"
        }
      },
      {
        "sku": "CORE20241",
        "name": "Corel 2024 1 máy",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "605.000 đ"
          }
        ],
        "note": "🖥️ Việc cài đặt sẽ được thực hiện thông qua hỗ trợ từ xa như UltraViewer/TeamViewer/AnyDesk. Đảm bảo sử dụng cố định trên 1 máy. Cam kết Bảo hành Fulltime (bảo hành trọn thời gian sử dụng).",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎨"
        }
      },
      {
        "sku": "CORE202320",
        "name": "Corel 2023/2022 1 máy",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "555.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🎨"
        }
      },
      {
        "sku": "KEYRETOHEA",
        "name": "Key Retouch4me - HEAL",
        "plans": [
          {
            "accountType": "Cấp Sẵn Key Dùng Riêng",
            "duration": "Vĩnh viễn",
            "price": "655.000 đ"
          }
        ],
        "note": "🔑 License sử dụng cố định cho 1 thiết bị và 1 Plugin. Bảo hành 1 năm. Cho phép tái kích hoạt Key sau khi cài đặt lại máy. ⚠️ Không bảo hành Key trong trường hợp: Thay chip/main/ổ cứng gốc, Đổi máy, hoặc ID bị đổi. (Xem Hướng dẫn sử dụng chi tiết: https://r4me.hdsd.net/",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🖼️"
        }
      },
      {
        "sku": "KEYRETODOD",
        "name": "Key Retouch4me - Dodge&Burn (D&G)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Key Dùng Riêng",
            "duration": "Vĩnh viễn",
            "price": "755.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🖼️"
        }
      },
      {
        "sku": "KEYRETOVIN",
        "name": "Key Retouch4me (vĩnh viễn)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Key Dùng Riêng",
            "duration": "Vĩnh viễn",
            "price": "885.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#000000",
          "color2": "#3a3a3a",
          "emoji": "🖼️"
        }
      },
      {
        "sku": "AUTO",
        "name": "Autocad",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "265.000 đ"
          }
        ],
        "note": "📧 Khách hàng vui lòng cung cấp địa chỉ email. Chúng tôi sẽ tiến hành thêm email của quý khách vào Team để hoàn tất nâng cấp.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "AUTOLE1",
        "name": "Autodesk Lẻ 1 app",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "285.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "AUTOLE2",
        "name": "Autodesk Lẻ 2 app",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "355.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "AUTOFULLAP",
        "name": "Autodesk Full APP",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "415.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      }
    ]
  },
  {
    "id": "vpn",
    "name": "VPN & Bảo mật",
    "icon": "🛡️",
    "services": [
      {
        "sku": "NORDVPN10",
        "name": "NORD VPN 10 thiết bị",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "3 Tháng",
            "price": "355.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "160.000 đ"
          }
        ],
        "note": "👑 Dịch vụ Nâng cấp trực tiếp trên tài khoản chính chủ của khách hàng.",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "NORD1THIE",
        "name": "NordVPN 1 thiết bị",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "284.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "264.000 đ"
          }
        ],
        "note": "🛡️ Tài khoản được cấp sẵn. Vui lòng không thay đổi mật khẩu để đảm bảo duy trì dịch vụ ổn định.",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "NORD25",
        "name": "NordVPN 2- 5 thiết bị",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "6 Tháng",
            "price": "284.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "12 Tháng",
            "price": "324.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "LASTCANHAN",
        "name": "LastPass Cá nhân",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "555.000 đ"
          }
        ],
        "note": "🔑 Dịch vụ nâng cấp trực tiếp lên tài khoản chính chủ của khách hàng hoặc cung cấp tài khoản dùng riêng (private account). Tận hưởng toàn bộ tính năng quản lý mật khẩu cao cấp nhất.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "LASTFAMI",
        "name": "LastPass Family",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "775.000 đ"
          }
        ],
        "note": "👨‍👩‍👧‍👦 Tài khoản Chính chủ, cho phép thêm tối đa 5 thành viên. Giải pháp tối ưu và an toàn để chia sẻ, quản lý mật khẩu cho gia đình hoặc nhóm nhỏ.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "1PAS",
        "name": "1Password",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "24 Tháng",
            "price": "625.000 đ"
          }
        ],
        "note": "⬆️ Dịch vụ nâng cấp trực tiếp lên tài khoản chính chủ hoặc cấp tài khoản dùng riêng (private account) cho khách hàng. Tận hưởng toàn bộ tính năng bảo mật cao cấp nhất.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "1PASFAMI5",
        "name": "1Password Family ( 5 member)",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "1 Tháng",
            "price": "915.000 đ"
          }
        ],
        "note": "👨‍👩‍👧‍👦 Tài khoản Chính chủ, cho phép thêm tối đa 5 thành viên. Giải pháp tối ưu và an toàn để chia sẻ, quản lý mật khẩu cho gia đình hoặc nhóm nhỏ.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "HOTSSHIEPR",
        "name": "Hotspot Shield Premium",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "155.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "555.000 đ"
          }
        ],
        "note": "🛡️ Tài khoản cấp sẵn, dành cho sử dụng riêng tư (private use) với thời hạn 1 năm. Tận hưởng trải nghiệm bảo mật và truy cập không giới hạn, ổn định trong thời gian dài.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "EXPRVPN1",
        "name": "Express VPN ( 1 thiết bị )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Chung",
            "duration": "1 Tháng",
            "price": "170.000 đ"
          }
        ],
        "note": "🚀 Tài khoản cấp sẵn, dành cho sử dụng riêng (private use) trên tối đa 8 thiết bị. Khách hàng được phép đổi mật khẩu tùy ý để bảo mật.",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "EXPRVPN8",
        "name": "Express VPN ( 8 thiết bị )",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "1 Tháng",
            "price": "150.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "PIAVPN",
        "name": "PIA VPN",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "665.000 đ"
          }
        ],
        "note": "🔑 Tài khoản Cấp sẵn, dùng riêng tư. Đảm bảo quyền riêng tư tối đa cho việc sử dụng.",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "HMAVPN1",
        "name": "HMA VPN 1 thiết bị (Không Dùng Được IOS)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Key Dùng Riêng",
            "duration": "12 Tháng",
            "price": "155.000 đ"
          }
        ],
        "note": "🔑 Kích hoạt bằng Key. Lưu ý: Đối với gói 5 thiết bị mới có hình thức Tài khoản Cấp sẵn dùng riêng.",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "HMA5THIE",
        "name": "HMA 5 thiết bị (Có Thể Dùng Được IOS)",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "525.000 đ"
          },
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "125.000 đ"
          }
        ],
        "note": "🛡️ Tài khoản Cấp sẵn, dùng riêng. Cho phép sử dụng tối đa trên 5 thiết bị, bao gồm cả iOS.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "KASPKID",
        "name": "Kaspersky Kid",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "275.000 đ"
          }
        ],
        "note": "🔑 Kích hoạt phần mềm bằng Key qua Ultraview.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "KASPVPN",
        "name": "Kaspersky VPN",
        "plans": [
          {
            "accountType": "Cấp Sẵn Dùng Riêng",
            "duration": "12 Tháng",
            "price": "325.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#1B72E8",
          "color2": "#0a3a82",
          "emoji": "🛡️"
        }
      },
      {
        "sku": "KASPPREM",
        "name": "Kaspersky Premium",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "365.000 đ"
          }
        ],
        "note": "📧 Nâng cấp trên Tài khoản Chính chủ. Thực hiện Add mail chính chủ (mail khách) để kích hoạt.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      }
    ]
  },
  {
    "id": "other",
    "name": "Sản phẩm khác",
    "icon": "📦",
    "services": [
      {
        "sku": "CHESDIAM",
        "name": "Chess Diamond",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "485.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ. Khách hàng cần cung cấp Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "CHESPLAT",
        "name": "Chess Platinum",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "585.000 đ"
          }
        ],
        "note": "",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "VIETPROCOD",
        "name": "Vietmap Pro - Code kích hoạt",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "565.000 đ"
          },
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "24 Tháng",
            "price": "1.000.000 đ"
          }
        ],
        "note": "🛡️ Khách hàng gửi Code kích hoạt Tài khoản Vietmap của khách hàng. Cam kết bảo hành full và là hàng chính hãng.",
        "brand": {
          "color1": "#06B6D4",
          "color2": "#0E7490",
          "emoji": "📦"
        }
      },
      {
        "sku": "DISCNITR",
        "name": "Discord Nitro",
        "plans": [
          {
            "accountType": "Nâng Cấp Chính chủ",
            "duration": "12 Tháng",
            "price": "1.125.000 đ"
          }
        ],
        "note": "🔑 Nâng cấp trên Tài khoản Chính chủ. Khách hàng vui lòng gửi Tên đăng nhập và Mật khẩu để chúng tôi tiến hành nâng cấp.",
        "brand": {
          "color1": "#5865F2",
          "color2": "#2a3199",
          "emoji": "💬"
        }
      }
    ]
  }
];
