# Pangram Cracker

Testing for valid answer

1. If submission.length < 5 alert("too short") and return
2. If submission.length > 6 checkPangram()
    3. if Pangram, alert(pangram!), add score, reset submission to '' and return
    4. if not pangram, checkValid()
        5. If valid, alert(pangram!), add score, reset submission to '' and return
        6. If !valid, alert('invalid'), reset submission to '' and return