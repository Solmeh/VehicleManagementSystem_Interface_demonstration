document.addEventListener('DOMContentLoaded', function () {
    // Logic for vehicles.html
    if (document.getElementById('addVehicleBtn')) {
        const vehicleModal = new bootstrap.Modal(document.getElementById('vehicleModal'));
        const modalTitle = document.getElementById('modalTitle');

        document.getElementById('addVehicleBtn').addEventListener('click', function () {
            modalTitle.textContent = '新增車輛';
            vehicleModal.show();
        });

        document.getElementById('viewDetailBtn').addEventListener('click', function () {
            modalTitle.textContent = '檢視/編輯車輛';
            vehicleModal.show();
        });
    }

    // Logic for sale_detail.html
    if (document.getElementById('addPaymentBtn')) {
        const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
        const loanModal = new bootstrap.Modal(document.getElementById('loanModal'));

        document.getElementById('addPaymentBtn').addEventListener('click', function () {
            paymentModal.show();
        });

        document.getElementById('editLoanBtn').addEventListener('click', function () {
            loanModal.show();
        });
    }

    // Logic for customer_detail.html
    if (document.getElementById('addFollowUpBtn')) {
        const followUpModal = new bootstrap.Modal(document.getElementById('followUpModal'));
        document.getElementById('addFollowUpBtn').addEventListener('click', function () {
            followUpModal.show();
        });
    }

    // Logic for payment_tracking.html
    if (document.getElementById('recordPaymentBtn')) {
        const recordPaymentModal = new bootstrap.Modal(document.getElementById('recordPaymentModal'));
        document.getElementById('recordPaymentBtn').addEventListener('click', function () {
            recordPaymentModal.show();
        });
    }

    // Logic for loan_calculator.html
    if (document.getElementById('calculateBtn')) {
        document.getElementById('calculateBtn').addEventListener('click', function () {
            const motorcyclePrice = parseFloat(document.getElementById('motorcyclePrice').value);
            const downPayment = parseFloat(document.getElementById('downPayment').value);
            const annualRate = parseFloat(document.getElementById('annualRate').value);
            const loanTerm = parseFloat(document.getElementById('loanTerm').value);

            if (isNaN(motorcyclePrice) || isNaN(downPayment) || isNaN(annualRate) || isNaN(loanTerm) || loanTerm <= 0) {
                alert("請輸入所有欄位的有效數字。");
                return;
            }

            const principal = motorcyclePrice - downPayment;
            const monthlyRate = (annualRate / 100) / 12;

            let monthlyPayment = 0;
            if (monthlyRate === 0) {
                monthlyPayment = principal / loanTerm;
            } else {
                monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
            }

            const resultsTableBody = document.getElementById('resultsTableBody');
            const newRow = resultsTableBody.insertRow();
            newRow.innerHTML = `
                <td>N/A</td>
                <td>N/A</td>
                <td>${motorcyclePrice.toLocaleString()}</td>
                <td>${document.getElementById('loanCompany').value || 'N/A'}</td>
                <td>${annualRate}</td>
                <td>${loanTerm}</td>
                <td>${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            `;
        });

        // Auto-fill motorcycle price when selecting from dropdown
        document.getElementById('motorcycleSelect').addEventListener('change', function() {
            const selectedPrice = this.value;
            if (selectedPrice) {
                document.getElementById('motorcyclePrice').value = selectedPrice;
            }
        });
    }
});