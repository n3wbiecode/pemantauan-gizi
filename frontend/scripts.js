// JavaScript untuk kalkulator nutrisi
document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai input
    var foodItem = document.getElementById('foodItem').value;
    var amount = parseFloat(document.getElementById('amount').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseFloat(document.getElementById('age').value);

    // Data nutrisi sementara (seharusnya diambil dari database atau API)
    var nutritionData = {
        "apple": { calories: 52, protein: 0.3, vitamins: "Vitamin C", minerals: "Potassium" },
        "banana": { calories: 89, protein: 1.1, vitamins: "Vitamin B6", minerals: "Potassium" },
        "carrot": { calories: 41, protein: 0.9, vitamins: "Vitamin A", minerals: "Calcium" }
        // Tambahkan data nutrisi untuk makanan lainnya sesuai kebutuhan
    };

    // Cek apakah makanan ada di dalam data
    if (nutritionData[foodItem.toLowerCase()]) {
        var nutrition = nutritionData[foodItem.toLowerCase()];

        // Hitung kalori berdasarkan data nutrisi dan jumlah makanan
        var totalCalories = (nutrition.calories * amount) / 100;

        // Hitung protein berdasarkan data nutrisi dan jumlah makanan
        var totalProtein = (nutrition.protein * amount) / 100;

        // Simulasi hitung vitamin dan mineral berdasarkan data nutrisi makanan
        var totalVitamins = nutrition.vitamins;
        var totalMinerals = nutrition.minerals;

        // Output hasil nutrisi
        var result = `Makanan: ${foodItem}, Jumlah: ${amount} gram/ml, Kalori: ${totalCalories.toFixed(2)} kkal, Protein: ${totalProtein.toFixed(2)} g, Vitamin: ${totalVitamins}, Mineral: ${totalMinerals}`;

        // Tambahkan elemen list baru untuk hasil nutrisi
        var li = document.createElement('li');
        li.textContent = result;

        // Tambahkan elemen list ke daftar nutrisi
        document.getElementById('nutritionList').appendChild(li);
    } else {
        alert("Data nutrisi untuk makanan tersebut tidak ditemukan.");
    }

    // Reset form input
    document.getElementById('nutritionForm').reset();
});
