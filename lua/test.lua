function hello_world()
return "heello guys"
end

function selectAll()
require('net.box')
conn = net_box.connect('localhost:3301')
return conn.space.db:select({1}, {timeout=1})
end

print(selectAll())


print(hello_world())
