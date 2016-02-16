if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to determine the location of an item in an array', function() {
	a.indexOf(3);
	a.indexOf(5);
	});

  it('you should be able to add the values of an array', function() {
    var sum = 0;
	for (var i = 0,  len = a.length; i < len; i++) {
		sum += a[i] << 0;
	}
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    var result = arraysAnswers.remove(a, 2);
	
	var i, len;

	for (i=0, len = a.length; i < len; i++) 
	{
	  if (a[i] === 2) {
		a.splice(i, 1);
		i = i - 1;
		len = len - 1;
	  }
	}
		return a;
		
		expect(result).to.have.length(3);
		expect(result.join(' ')).to.eql('1 3 4');
	});

  it('you should be able to remove all instances of a value from an array, returning the original array', function() {
    a.splice( 1, 0, 2 );
    a.push(2);
    a.push(2);

    var result = arraysAnswers.removeWithoutCopy(a, 2);
	
	for (i=0, len = a.length; i < len; i++) 
	{
	  if (a[i] === 2) {
		a.splice(i, 1);
		i = i - 1;
		len = len - 1;
	  }
	}
		return a;
		
    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');

    // make sure that you return the same array instance
    expect(result).equal(a);
  });

  it('you should be able to add an item to the end of an array', function() {
    var result = arraysAnswers.append(a, 10);
	
	a.push(10);
	return a;
	
    expect(result).to.have.length(5);
    expect(result[result.length - 1]).to.eql(10);
  });

  it('you should be able to remove the last item of an array', function() {
    var result = arraysAnswers.truncate(a);
	
	a.pop();
	return a;

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 2 3');
  });

  it('you should be able to add an item to the beginning of an array', function () {
    var result = arraysAnswers.prepend(a, 10);
	
	a.unshift(10);
	return a;

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it('you should be able to remove the first item of an array', function () {
    var result = arraysAnswers.curtail(a);
	
	a.shift();
	return a;

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('2 3 4');
  });

  it('you should be able to join together two arrays', function() {
    var c = [ 'a', 'b', 'c', 1 ];
    var result = arraysAnswers.concat(a, c);
	
	return a.concat(c);
	
    expect(result).to.have.length(8);
    expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
  });

  it('you should be able to add an item anywhere in an array', function() {
    var result = arraysAnswers.insert(a, 'z', 2);
	
	a.splice(2, 0, 'z');
	return a;
	
    expect(result).to.have.length(5);
    expect(result.join(' ')).to.eql('1 2 z 3 4');
  });

  it('you should be able to count the occurences of an item in an array', function() {
    var result = arraysAnswers.count([ 1, 2, 4, 4, 3, 4, 3 ], 4);
	
	var count = 0;
    for (i=0, len = a.length; i < len; i++) 
	{
		if (a[i] === '4') {
		  count++;
		}
	}
	return count;
	
    expect(result).to.eql(3);
  });

  it('you should be able to find duplicates in an array', function() {
    var result = arraysAnswers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);
	
	var seen = {};
	var duplicates = [];

	  for (var i = 0, len = a.length; i < len; i++) {
		seen[a[i]] = seen[a[i]] ? seen[a[i]] + 1 : 1;
	  }

	  for (var item in seen) {
		if (seen.hasOwnProperty(item) && seen[item] > 1) {
		  duplicates.push(item);
		}
	  }

	  return duplicates;
  
    expect(result.sort()).to.eql([1, 3, 4]);
  });

  it('you should be able to square each number in an array', function() {
    var result = arraysAnswers.square(a);
	
	var squared = [];
	  for (var i = 0, len = a.length; i < len; i++) {
		squared.push(a[i]*a[i]);
	  }
	  return squared;
	  
    expect(result).to.have.length(4);
    expect(result.join(' ')).to.eql('1 4 9 16');
  });

  it('you should be able to find all occurrences of an item in an array', function() {
    var result = arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'a');
	
    expect(result.sort().join(' ')).to.eql('0 6');
  });

});
