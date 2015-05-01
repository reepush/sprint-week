##### classes
# class Value
#   def initialize(v)
#     @val = v
#   end

#   def set(v)
#     @val = v
#   end

#   def get
#     @val
#   end
# end

# t = Value.new 10
# puts "#{t.get} after init"
# t.set 101
# puts "#{t.get} after set"

# class Value
#   def inc
#     @val += 1
#   end
# end

# t.inc
# puts "#{t.get} after inc"

# a = Value.new(0)
# def t.own
#   puts 'very own method'
# end
# b = Value.new(0)

# puts t.own
# begin
#   puts a.own
#   puts b.own
# rescue
#   puts 'a and b do not have "own" method'
# end

# puts
# class Box
#   def initialize(w, h)
#     @w, @h = w, h
#     @fill = ' '
#   end

#   def fill(f)
#     @fill = f
#     return self
#   end

#   def flip
#     @w, @h = @h, @w
#   end

#   def gen
#     line('+', @w, '-')
#     @h.times { line('|', @w, @fill) }
#     line('+', @w, '-')
#   end

#   def to_s
#     fill = @fill
#     if fill == ' '
#       fill = '(spaces)'
#     end

#     return 'Box ' + @w.to_s + 'x' + @h.to_s + ', filled: ' + fill
#   end

# private
#   def line(ends, count, fill)
#     print ends
#     count.times { print fill }
#     print ends, "\n"
#   end
# end

# b1 = Box.new(1, 4)
# b2 = Box.new(3, 3).fill 'x'
# b3 = Box.new(5, 10)

# b1.gen
# b1.flip
# b1.gen
# puts b1.to_s
# puts

# b2.gen
# puts b2.to_s

##### inheritance
# class Parent
#   def initialize(v)
#     @val = v
#   end

#   def set(v)
#     @val = v
#   end

#   def get
#     @val
#   end

#   def inc
#     @val += 1
#   end

#   def dec
#     @val -= 1
#   end
# end

# class Child < Parent
#   def initialize(v, s=1)
#     super(v)
#     @val = v
#     @step = s
#   end

#   def inc
#     @val += @step
#   end

#   def dec
#     @val -= @step
#   end

#   def hidden
#     puts 'super-hidden'
#   end
# end

# p = Parent.new(10)
# puts "initial p is #{p.get}"
# p.inc
# puts "after inc p is #{p.get}"
# puts

# c = Child.new(0, 10)
# puts "initial c is #{c.get}"
# c.inc
# puts "after inc c is #{c.get}"
# c.hidden

# begin
#   c.val = 'public'
#   puts "c.val is #{c.val}"
# rescue
#   puts 'class properties are private'
# end

##### variables
# class Parent
#   def initialize(v)
#     @val = v
#   end

#   def get
#     puts "#{val} from parent"
#   end

#   def append=(more)
#     @val += more
#   end

#   attr_reader :val
#   attr_writer :val
# end

# p = Parent.new('new')
# puts "val property is #{p.val}"
# p.val = 'newer'
# puts "val property is #{p.val}"
# p.append = ' :)'
# puts "val property is #{p.val}"
