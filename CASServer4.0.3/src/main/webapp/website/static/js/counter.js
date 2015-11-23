/*
 * jquery-counter plugin
 *
 * Copyright (c) 2009 Martin Conte Mac Donell <Reflejo@gmail.com>
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * modified by Yincp
 */

jQuery.fn.counter = function(userOptions)
{
    // Default options
    var options = {
        moveTime: 80,
        stepTime: 3,
        steps: 10,
        origin: 0,
        to: 0,
        number: 0,
        digits: 7,
        digitImages: 6,
        digitWidth: 21,
        digitHeight: 30,
        image: "digits.png"/*tpa=http://www.bangcle.com/static/images/digits.png*/,
        cb: null,
        cbCount: 1000000
    };
    var digits = [], deltas = [], microStep, macroStep, current = 0;

    // Draw digits in given container
    var createDigits = function(where)
    {
        var c = 0;
        where.empty();
        current = options.origin;

        for (var i = options.digits - 1; i >= 0; i--)
        {
            d = Math.floor((options.origin % Math.pow(10, i + 1)) / Math.pow(10, i))
            elem = $('<div id="cnt_' + i + '" class="cntDigit" />').css({
                height: options.digitHeight * options.digitImages * 10,
                float: 'left', background: 'url(\'' + options.image + '\')',
                width: options.digitWidth, marginTop: -((d * options.digitHeight * options.digitImages))});
            digits.push(elem);
            deltas.push(0);
            ++c;

            where.append(elem);
        }
    };
  
    // Set or get element margin
    var margin = function(elem, val)
    {
        if (val !== undefined)
            return digits[elem].css({'marginTop': val + 'px'});

        return parseInt(digits[elem].css('marginTop').replace('px', ''));
    };


    var step = function()
    {
        macroStep = options.steps;
        _step();
    }

    var _step = function()
    {
        var n = Math.floor((options.to - options.origin) * (options.steps - macroStep + 1) / options.steps);
        increaseTo(options.origin + n);

        macroStep --;
        if (macroStep > 0)
            setTimeout(_step, options.stepTime * 1000);
    }

    var increaseTo = function(newNumber)
    {
        for (var i = options.digits - 1; i >= 0; i--)
        {
            d = Math.floor((newNumber % Math.pow(10, i + 1)) / Math.pow(10, i));
            d_ = Math.floor((current % Math.pow(10, i + 1)) / Math.pow(10, i));
            deltas[options.digits - 1 - i] = (10 + d - d_) % 10;
        }
        current = newNumber;
        microStep = options.digitImages;
        _move();
        if (newNumber >= options.cbCount && options.cb != null)
            options.cb()
    }

    var _move = function()
    {
        for (var i = 0; i < digits.length; i++)
        {
            if (deltas[i] > 0)
            {
                dy = margin(i) - deltas[i] * options.digitHeight
                if (dy <= -(options.digitHeight * options.digitImages * 10))
                    dy += options.digitHeight * options.digitImages * 10
                margin(i, dy);
            }
        }
        microStep --;
        if (microStep > 0)
            setTimeout(_move, options.moveTime);
    }

    $.extend(options, userOptions);
    this.css({height: options.digitHeight, overflow: 'hidden'});
    createDigits(this);
    //if (options.to != -1)
    step()
};
