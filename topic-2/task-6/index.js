/**
 * Задача 6 - Третье измерение
 * Круги кругами, а интересно какой объем у цилиндра.
 * Только вот тут хотелось бы ещё и точность вычислений настроить.
 * Реализуйте логику константы miniMathLibExtended
 * Константа должна содержать функцию volume
 * Подсмотрите в задачу 4
 *
 * Реализуйте функцию, которая возвращает модифицированный volume из miniMathLibExtended
 * в которую передается значение Пи, необходимое для расчетов
 * */
const miniMathLibExtended = {
    pi: 3.14,
    volume: function (radius, height) {
        if (radius<0 || height<0) {
            throw new Error("Radius or Height <0");
        }

        return height*miniMathLibExtended.pi*radius**2;
    }
}

function cylinderVolumeAccurate(pi){
    miniMathLibExtended.pi = pi;

    return function (radius, height) {
        return miniMathLibExtended.volume(radius, height);
    }
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;