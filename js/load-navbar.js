// load-navbar.js
const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="dashboard.html" class="navbar-brand">車輛管理系統</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link" href="dashboard.html">儀表板</a></li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownVehicles" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        車輛管理
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownVehicles">
                        <li><a class="dropdown-item" href="vehicles.html">車輛清單</a></li>
                        <li><a class="dropdown-item" href="vehicles.html?tab=add">新增車輛</a></li>
                        <li><a class="dropdown-item" href="vehicles.html?tab=maintenance">維修記錄</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        銷售管理
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownSales">
                        <li><a class="dropdown-item" href="sales_records.html">銷售記錄</a></li>
                        <li><a class="dropdown-item" href="sale_detail.html">新增銷售</a></li>
                        <li><a class="dropdown-item" href="payment_tracking.html">付款追蹤</a></li>
                        <li><a class="dropdown-item" href="finance_loans.html">貸款狀態追蹤</a></li>
                        <li><a class="dropdown-item" href="loan_calculator.html">月付款計算器</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCustomers" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        客戶管理
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownCustomers">
                        <li><a class="dropdown-item" href="customers.html">客戶清單</a></li>
                        <li><a class="dropdown-item" href="customer_detail.html">新增客戶</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFinancialReports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        財務報表
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownFinancialReports">
                        <li><a class="dropdown-item" href="report_sales.html">銷售報表</a></li>
                        <li><a class="dropdown-item" href="report_profit.html">利潤分析</a></li>
                        <li><a class="dropdown-item" href="finance_receivables.html">應收款管理</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownInventory" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        庫存與採購
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownInventory">
                        <li><a class="dropdown-item" href="inventory_analysis.html">庫存概覽</a></li>
                        <li><a class="dropdown-item" href="vehicles.html?tab=used_car_purchase">二手車採購記錄</a></li>
                        <li><a class="dropdown-item" href="inventory_suggestions.html">採購建議</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSettings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        系統設定
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownSettings">
                        <li><a class="dropdown-item" href="users.html">使用者管理</a></li>
                        <li><a class="dropdown-item" href="settings_master_data.html">基礎資料維護</a></li>
                        <li><a class="dropdown-item" href="settings_parameters.html">系統參數設定</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item"><a href="index.html" class="btn btn-outline-light">登出</a></li>
            </ul>
        </div>
    </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            // For dropdowns, also activate the parent toggle
            const parentDropdownToggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
            if (parentDropdownToggle) {
                parentDropdownToggle.classList.add('active');
            }
        }
    });

    // Handle dropdown item active state (for direct links within dropdowns)
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    dropdownItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref && itemHref.includes(currentPath)) {
            item.classList.add('active');
            // Also activate the parent dropdown toggle
            const parentDropdownToggle = item.closest('.dropdown')?.querySelector('.dropdown-toggle');
            if (parentDropdownToggle) {
                parentDropdownToggle.classList.add('active');
            }
        }
    });

    // Handle specific tab activation for vehicles.html
    if (currentPath === 'vehicles.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab) {
            const tabButton = document.getElementById(`${tab}-tab`);
            if (tabButton) {
                const bsTab = new bootstrap.Tab(tabButton);
                bsTab.show();
            }
        }
    }
});