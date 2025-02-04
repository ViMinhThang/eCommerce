const slugToTitle = (slug) => {
    const titleMap = {
        "hang-moi-ve": "Hàng Mới Về",
        "giay": "Giày Nam",
        "phu-kien": "Phụ Kiện Nam",
    };
    return titleMap[slug] || slug.split("-").join(" ").toUpperCase();
};

const generateBreadcrumbItems = (location) => {
    const pathnames = location.pathname
        .split("/")
        .filter((x) => x)
        .map((path, index, arr) => {
            const isLast = index === arr.length - 1;
            return {
                path: isLast ? null : `/${arr.slice(0, index + 1).join("/")}`,
                title: slugToTitle(path),
            };
        });

    // Thêm mục Home vào đầu
    return [{ path: "/", title: "Home" }, ...pathnames];
};

export  { slugToTitle, generateBreadcrumbItems };