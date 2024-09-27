function calculateBMI() {
            let weight = document.getElementById('weight').value;
            let height = document.getElementById('height').value;

            if (weight > 0 && height > 0) {
                let bmi = weight / (height * height);
                document.getElementById('result').innerText = `あなたのBMIは ${bmi.toFixed(2)} です。`;
            } else {
                document.getElementById('result').innerText = '正しい値を入力してください。';
            }
        }
