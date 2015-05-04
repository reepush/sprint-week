##### if / else / elsif
# rand = rand(100) + 1

# if rand % 2 == 1 then
#   puts 'rand is odd'
# else
#   puts 'rand is even'
# end

# if rand > 50
#   puts 'rand is bigger than 50'
# elsif rand > 90
#   puts 'it is mostly 100'
# else
#   puts 'but not so big as 100'
# end

# if rand == 100 then puts 'rand is max' end


##### unless / postfix if / if as expression
# less = 'more'
# more = 'less'
# unless less == 'less'
#   puts 'less is not less!'
# end

# puts 'more is not more!' if more != 'more'

# if more == 'less' && less == 'more'
#   puts 'less is more, more is less!'
# end

# truthy = if true == true then 'falsy' end
# puts "truthy is #{truthy}"


##### while
# days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
# puts days.shift while days.size > 0

# n = 10
# while n > 0
#   print n, ' '
#   n = n - 1
# end
# print "\n"


##### optional parenthesis
# puts('optional?')
# puts 'optional!'


##### for loop
# for i in (1..4)
#   print i, ' '
#   print "\n" if i == 4
# end

# for i in (1...4)
#   print i, ' '
#   print "\n" if i == 3
# end

# a = [1, 2, 'end']
# for i in a
#   puts i
# end

# puts "\n", 'traversing array'
# for i in (0...a.length)
#   puts a[i]
# end


##### case
# for i in (1..10)
#   rand = rand(100) + 1
#   puts rand
#   msg = case rand
#     when 42
#       'awesome'
#     when 1..10
#       'bad'
#     when 11..15, 19, 27
#       'interesting'
#     when 90...100
#       'cold'
#     when 100
#       puts 'FIRE!111!'
#       'A+'
#     else
#       'again'
#     end

#   puts msg
# end


##### iterators
# sum = 0
# squares = [1, 4, 9, 16, 25, 36]
# squares.each { |i| sum += i }
# puts "sum #{sum}"

# s = 'vertical'
# s.each_char do |c|
#   puts c.upcase
# end

# hash = { 1 => 'one', 2 => 'two', 3 => 'three' }
# hash.each { |k, v| puts "#{k} => #{v}" }

# 3.times { print '-triple-' }
# puts

# 3.upto(7) do |i|
#   print i.to_s + ' '
# end
# puts


##### methods
# def sqr(x)
#   return x*x
# end
# n = 2
# puts "n is #{n}, sqr(n) is #{sqr(n)}"

# (rand(5) + 2).times {
#   a = rand 10
#   print a, '^2 = ', sqr(a), "\n"
# }

# def no_param
#   puts 'params? do not need them!'
# end
# no_param
# no_param()

# def right?(answer = 'yes')
#   puts "right? #{answer}"
# end
# right?
# right?('no')

# a = 'outer'
# def inner(s)
#   s = 'inner'
# end
# inner(a)
# puts a

# hash = { a => 'outer' }
# inner(hash[a])
# puts hash[a]

# def shuffle(arr)
#   for n in 0...arr.size
#     nn = n + rand(arr.size - n)
#     arr[n], arr[nn] = arr[nn], arr[n]
#   end
# end

# def pairs(a, b)
#   shuffle a
#   a.each_with_index do |adj, i|
#     puts adj + ' ' + b[i]
#   end
# end

# adj = ['Strange', 'Fresh', 'Alarming']
# pairs adj, ['lemonade', 'procedure', 'sounds']
# puts adj.join ' '

# def surround(before, after, *items)
#   items.each { |x| print before, x, after, "\n" }
# end

# surround '[', ']', 'one', 'two', 'three'

# puts
# a = ['three', 'two', 'one']
# surround '<', '>', *a

##### exceptions
# print 'Filename:'
# filename = gets.chomp
# begin
#   f = open(filename)
#   lines = 0
#   f.each { |line| lines += 1 }
# rescue
#   print 'No such filename!'
# else
#   print 'Total lines: #{lines}'
# end
