##### output
# puts 'hi there'
# puts "hi there"
# print 'and there'


##### variables and expressions
# n = 5
# puts "n is #{n}"

# e = n * 5 + 25
# puts "e is #{e}"

# s = 'string'
# puts "e is #{s}"


##### type is dynamic
# n = 20
# puts "n is int: #{n}"

# n = 'hey'
# puts "n is string: #{n}"


##### everything is object
# n = 10
# puts n.+(5)*(2)
# s = String.new('stringy')
# Kernel.puts s


##### multiline strings
# puts "it is multiline
# JavaScript is crying, really"


##### interpolation
# what = 'it'
# puts "I already used #{what}"


##### string methods
# s = 'Hi! I am String, methodical string =_='
# puts 'length ' + s.length.to_s
# puts '-triple-' * 3

# puts 'range ' + s[0, 3]
# puts 'range ' + s[0, 3]

# puts 'reversed ' + s.reverse
# puts '=_= at ' + s.index('=_=').to_s


##### arrays
# a = [1, 3, 9 , 27, 81]
# b = [2, 4, 8, 16, 32]
# print 'concat '.+ (a + b).join(', ') + "\n"
# print '3 32 == ', [a[1], b[-1], a[21]].join(' '), "\n"
# print 'sorted ', (a + b).sort, "\n"

# puts 'push ' + (a << 81*3 << 'finally' << 'end').to_s
# puts 'strings and arrows ' + ('a ' << 'b').to_s

# puts 'remove first ' + a.shift.to_s
# puts 'remove last ' + a.pop.to_s

# puts 'b array ' + b.to_s
# b.delete_at(0)
# puts 'delete 2 by index ' + b.to_s
# b.delete(16)
# puts 'delete 16 by value ' + b.to_s


##### hashes
# h = { 'key' => 'value', 1 => 2, 'rabbit' => 'carrot'  }
# puts h
# puts 'key ' + h['key']
# puts '1 ' + h[1].to_s
# puts 'nothing here ' + h['1'].to_s
# puts 'rabbit likes ' + h['rabbit'].to_s

# h['monkey'] = 'bananas'
# puts 'monkey likes ' + h['monkey']

# puts 'do we now what rabbit likes? ' + h.has_key?('rabbit').to_s


##### input
# puts 'with output comes input'
# input = gets
# puts input

# puts 'lets calculate two numbers!'
# input = gets
# space_offset = input.index(' ')
# n1 = input[0, space_offset]
# n2 = input[space_offset+1, input.length]
# puts n1.to_i + n2.to_i


##### reading file
# puts 'reading code that reads a code'
# code = File::read('basic.rb')
# print code


##### definition tricks
# a, b, c = 1, 2, 3
# print '1 2 3 ', [a, b, c].join(','), "\n"

# a, b, c = 10, a * 2, b * 3
# puts '10 2 6 looks like ' + [a, b, c].join(' ').to_s

# print 'a, b ', a, ' ', b, "\n"
# a, b = b, a
# print 'swapped a, b ', a, ' ', b, "\n"


##### puts and print
# puts 'puts', 'is', 'newliny'
# print 'while print is ', 'not'
# print ', so you should add newline by yourself', "\n"
# puts 'like that'


##### type checking is strong
# puts 'it is not possible to add integer to string' + 5
# puts 'only with implicit conversion!!' + 1.to_s
