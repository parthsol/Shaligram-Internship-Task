function diamond(number) {

    double = number * 2;
    for (i = 0; i < double; i++) {
        if (i < number) {
            for (j = 0; j < i; j++) {
                document.write('*');
            }
        }
        if (i >= number) {
            for (j = double; j > i; j--) {
                document.write('*');
            }
        }

        document.write('<br>');
    }
}