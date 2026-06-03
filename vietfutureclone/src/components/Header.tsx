import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'GIỚI THIỆU',
    href: '#',
    children: [
      { label: 'Giới thiệu chung', href: '/gioi-thieu-chung' },
      { label: 'Lĩnh vực dự thi', href: '/linh-vuc-du-thi' },
      { label: 'Tiêu chí đánh giá', href: '/tieu-chi-danh-gia' },
      { label: 'Lịch trình triển khai', href: '/lich-trinh-trien-khai' },
      { label: 'Hồ sơ giải thưởng', href: 'https://drive.google.com/drive/folders/1FTJhM3stO18akwi3rj2rQ5Gt5W6F4z2H?usp=share_link' },
    ],
  },
  {
    label: 'HỘI ĐỒNG',
    href: '#',
    children: [
      { label: 'Giới thiệu Hội đồng', href: '/gioi-thieu-hoi-dong' },
      { label: 'Hội đồng Giám khảo', href: '/giam-khao' },
      { label: 'Danh sách Mentor', href: '/mentor' },
    ],
  },
  {
    label: 'GIẢI THƯỞNG',
    href: '#',
    children: [
      { label: 'Danh sách 2025', href: '/danh-sach-giai-thuong-vietfuture-2025' },
      { label: 'Danh sách 2024', href: '/danh-sach-giai-thuong-vietfuture-2024' },
      { label: 'Danh sách 2023', href: '/danh-sach-giai-thuong-vietfuture-2023' },
    ],
  },
  {
    label: 'THAM GIA',
    href: '#',
    children: [
      { label: 'Quyền lợi', href: '/quyen-loi' },
      { label: 'Đăng ký tham gia', href: 'https://vietfuture.vinasa.org.vn/' },
      { label: 'Quy trình đăng ký tham gia', href: '/quy-trinh-dang-ky' },
      { label: 'Hướng dẫn tham gia', href: 'https://drive.google.com/drive/folders/1vSmSXc4nFTP-Ch3hY-J1A8lNvPHROl0S?usp=share_link' },
    ],
  },
  {
    label: 'TRUYỀN THÔNG',
    href: '#',
    children: [
      { label: 'Thông cáo báo chí', href: '/thong-cao-bao-chi' },
      { label: 'Thư viện ảnh', href: 'https://drive.google.com/drive/folders/1yzbHZCTz3oiNdH2ThT7Zlu6d93_hKrDB?usp=drive_link' },
      { label: 'Báo cáo hậu kỳ', href: 'https://drive.google.com/drive/folders/12560GwmgPG95KjdYiisl7GTD73y146_n' },
      { label: 'Tin tức', href: '/bao-chi-dua-tin' },
    ],
  },
  { label: 'FAQs', href: '/faqs' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto max-w-[1220px] px-4">
        <div className="flex h-[73px] items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://vietfuture.world/wp-content/uploads/2025/10/Logo-viet-future-2026_300.png"
                alt="VietFuture"
                className="h-[60px] w-auto"
              />
            </a>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="font-medium text-sm hover:text-[#0979a8] transition-colors"
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▼</span>}
                </a>
                {item.children && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0979a8] transition-colors"
                        target={child.href.startsWith('http') ? '_blank' : undefined}
                        rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://vietfuture.world/en/homepage_en/" className="flex items-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="English" width="16" height="11" />
            </a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block py-2 font-medium text-sm hover:text-[#0979a8]"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block py-1 text-sm text-gray-600 hover:text-[#0979a8]"
                          target={child.href.startsWith('http') ? '_blank' : undefined}
                          rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
