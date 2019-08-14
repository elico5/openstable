require 'open-uri'

# Creating initial users
demo_user = User.create(
    first_name: 'Demo',
    last_name: 'User',
    email: 'demouser@openstable.com',
    password: 'demouser',
    phone_number: '',
    riding_location: 1)

seed_user1 = User.create(
    first_name: 'Jebediah',
    last_name: 'Wilkinson',
    email: 'jbwilks5@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)

seed_user2 = User.create(
    first_name: 'Davey',
    last_name: 'Jameson',
    email: 'daveywhisk@gmail.com',
    password: 'password', #hellomyfriend
    phone_number: '',
    riding_location: 1)

seed_user3 = User.create(
    first_name: 'James',
    last_name: 'Jones',
    email: 'jjones@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)

seed_user4 = User.create(
    first_name: 'John',
    last_name: 'Howard',
    email: 'jhoward@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)

# Creating initial stables
seed_stable1 = Stable.create(
    name: 'Sheridan Inn Livery Stables',
    phone_number: '307-253-5289',
    street_address: '812 North Gould Street',
    city: 'Sheridan',
    state: 'WY',
    zip: '82801',
    groom_id: seed_user1.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '05:00',
    close_time: '23:00',
    duration: 4,
    price: 8
)

seed_stable2 = Stable.create(
    name: 'Collins Inn Livery Stable',
    phone_number: '413-219-2227',
    street_address: '736 Boston Road',
    city: 'Springfield',
    state: 'MA',
    zip: '01119',
    groom_id: seed_user2.id,
    description: 'J. N. Jones Livery Stable. "J. N. Jones was born in Independence. Oregon, October 22, 1869, but at an early age moved with his parents to Umatilla County, where they stayed seven years. Moving then to Morrow County, he received his preliminary education in the public schools, and later attended the Willamette University at Salem. Returning home he became engaged in the stock business until May, 1890, when he moved to Sumpter. In September of the same year he bought out the livery, feed and sale stable of Thos. Mc-Ewen, and has made a number of improvements to it. His barn is large and commodious, being 40 x 100, in which he can stable sixty head of horses. He has a number of fine turnouts on hand which he keeps for the benefit of the public, and rents at very reasonable figures. He especially caters to the traveling and mining men, making their trade a feature of his business." Source: p. 29, Souvenir Edition. Morning Democrat, Bowen & Small, Publishers, May 20th, 1898.',
    capacity: 6,
    open_time: '04:00',
    close_time: '21:00',
    duration: 6,
    price: 2
)

seed_stable3 = Stable.create(
    name: 'J. N. Jones Livery Stable',
    phone_number: '458-336-2542',
    street_address: '211 Austin Street',
    city: 'Sumpter',
    state: 'OR',
    zip: '97877',
    groom_id: seed_user3.id,
    description: 'J. N. Jones Livery Stable. "J. N. Jones was born in Independence. Oregon, October 22, 1869, but at an early age moved with his parents to Umatilla County, where they stayed seven years. Moving then to Morrow County, he received his preliminary education in the public schools, and later attended the Willamette University at Salem. Returning home he became engaged in the stock business until May, 1890, when he moved to Sumpter. In September of the same year he bought out the livery, feed and sale stable of Thos. Mc-Ewen, and has made a number of improvements to it. His barn is large and commodious, being 40 x 100, in which he can stable sixty head of horses. He has a number of fine turnouts on hand which he keeps for the benefit of the public, and rents at very reasonable figures. He especially caters to the traveling and mining men, making their trade a feature of his business." Source: p. 29, Souvenir Edition. Morning Democrat, Bowen & Small, Publishers, May 20th, 1898.',
    capacity: 60,
    open_time: '06:00',
    close_time: '23:00',
    duration: 6,
    price: 3
)

seed_stable4 = Stable.create(
    name: 'John C. Howard Livery & Sale Stables',
    phone_number: '202-357-2020',
    street_address: '1706 G Street NW',
    city: 'Washington',
    state: 'DC',
    zip: '20006',
    groom_id: seed_user4.id,
    description: 'J. N. Jones Livery Stable. "J. N. Jones was born in Independence. Oregon, October 22, 1869, but at an early age moved with his parents to Umatilla County, where they stayed seven years. Moving then to Morrow County, he received his preliminary education in the public schools, and later attended the Willamette University at Salem. Returning home he became engaged in the stock business until May, 1890, when he moved to Sumpter. In September of the same year he bought out the livery, feed and sale stable of Thos. Mc-Ewen, and has made a number of improvements to it. His barn is large and commodious, being 40 x 100, in which he can stable sixty head of horses. He has a number of fine turnouts on hand which he keeps for the benefit of the public, and rents at very reasonable figures. He especially caters to the traveling and mining men, making their trade a feature of his business." Source: p. 29, Souvenir Edition. Morning Democrat, Bowen & Small, Publishers, May 20th, 1898.',
    capacity: 20,
    open_time: '06:00',
    close_time: '23:59',
    duration: 3,
    price: 9
)

# Finding files from AWS
file1 = open('https://openstableseeds.s3.amazonaws.com/sheridan.jpg')
file2 = open('https://openstableseeds.s3.amazonaws.com/collins.jpg')
file3 = open('https://openstableseeds.s3.amazonaws.com/jnjones.jpg')
file4 = open('https://openstableseeds.s3.amazonaws.com/johnhoward.jpg')

# Attaching pictures to stables
seed_stable1.picture.attach(io:file1, filename: "stable_#{seed_stable1.id}_picture")
seed_stable2.picture.attach(io:file2, filename: "stable_#{seed_stable2.id}_picture")
seed_stable3.picture.attach(io:file3, filename: "stable_#{seed_stable3.id}_picture")
seed_stable4.picture.attach(io:file4, filename: "stable_#{seed_stable4.id}_picture")

# jacob may stable
jacob_may = User.create(
    first_name: 'Jacob',
    last_name: 'May',
    email: 'jmay@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)
jcmay = Stable.create(
    name: 'J. C. May Livery Stable',
    phone_number: '724-887-6500',
    street_address: '108 N Broadway Street',
    city: 'Scottdale',
    state: 'PA',
    zip: '15683',
    groom_id: jacob_may.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 15,
    open_time: '07:00',
    close_time: '23:00',
    duration: 5,
    price: 5
)
file = open('https://openstableseeds.s3.amazonaws.com/may.jpg')
jcmay.picture.attach(io:file, filename: "stable_#{jcmay.id}_picture")


# higginson stable
jhigg = User.create(
    first_name: 'John',
    last_name: 'Higginson',
    email: 'jhigginson@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 4)
jhiggstable = Stable.create(
    name: 'J. L. Higginson Livery Stable',
    phone_number: '214-208-5754',
    street_address: '701 W Main Street',
    city: 'Denison',
    state: 'TX',
    zip: '75020',
    groom_id: jhigg.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '04:00',
    close_time: '23:00',
    duration: 6,
    price: 10
)
file = open('https://openstableseeds.s3.amazonaws.com/higginson.jpg')
jhiggstable.picture.attach(io:file, filename: "stable_#{jhiggstable.id}_picture")

# higginson stable
jhigg = User.create(
    first_name: 'John',
    last_name: 'Higginson',
    email: 'jhigginson@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 4)
jhiggstable = Stable.create(
    name: 'J. L. Higginson Livery Stable',
    phone_number: '214-208-5754',
    street_address: '701 W Main Street',
    city: 'Denison',
    state: 'TX',
    zip: '75020',
    groom_id: jhigg.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '04:00',
    close_time: '23:00',
    duration: 6,
    price: 10
)
file = open('https://openstableseeds.s3.amazonaws.com/higginson.jpg')
jhiggstable.picture.attach(io:file, filename: "stable_#{jhiggstable.id}_picture")

# grandstreet stable
wbrad = User.create(
    first_name: 'William',
    last_name: 'Bradley',
    email: 'billbrad@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)
grandstreet = Stable.create(
    name: 'Grand Street Livery Stables',
    phone_number: '212-357-4289',
    street_address: '105 Grand Street',
    city: 'New York',
    state: 'NY',
    zip: '10013',
    groom_id: wbrad.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 40,
    open_time: '01:00',
    close_time: '23:30',
    duration: 7,
    price: 12
)
file = open('https://openstableseeds.s3.amazonaws.com/grandstreet.jpg')
grandstreet.picture.attach(io:file, filename: "stable_#{grandstreet.id}_picture")

# mckaywilbur stable
jmckay = User.create(
    first_name: 'John',
    last_name: 'Mckay',
    email: 'johnmckay@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
mckaywilbur = Stable.create(
    name: 'McKay & Wilbur Livery, Feed & Sale Stable',
    phone_number: '559-442-1047',
    street_address: '1800 Tulare Street',
    city: 'Fresno',
    state: 'CA',
    zip: '93721',
    groom_id: jmckay.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 70,
    open_time: '03:00',
    close_time: '23:00',
    duration: 5,
    price: 8
)
file = open('https://openstableseeds.s3.amazonaws.com/mckaywilbur.jpg')
mckaywilbur.picture.attach(io:file, filename: "stable_#{mckaywilbur.id}_picture")

# clarkson stable
jrocket = User.create(
    first_name: 'Johnny',
    last_name: 'Rocket',
    email: 'jrock@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
clarkson = Stable.create(
    name: 'Clarkson Livery Barn',
    phone_number: '402-892-3100',
    street_address: '120 W 2nd Street',
    city: 'Clarkson',
    state: 'NE',
    zip: '68629',
    groom_id: jrocket.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 50,
    open_time: '02:00',
    close_time: '22:00',
    duration: 10,
    price: 10
)
file = open('https://openstableseeds.s3.amazonaws.com/clarkson.jpg')
clarkson.picture.attach(io:file, filename: "stable_#{clarkson.id}_picture")

# langston stable
jlangston = User.create(
    first_name: 'John',
    last_name: 'Langston',
    email: 'jlangston@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
langston = Stable.create(
    name: "Langston's Livery Stable",
    phone_number: '206-659-7596',
    street_address: '6335 1st Avenue South',
    city: 'Seattle',
    state: 'WA',
    zip: '98108',
    groom_id: jlangston.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 40,
    open_time: '04:00',
    close_time: '23:30',
    duration: 5,
    price: 9
)
file = open('https://openstableseeds.s3.amazonaws.com/langston.jpg')
langston.picture.attach(io:file, filename: "stable_#{langston.id}_picture")

# toombes stable
otoombes = User.create(
    first_name: 'Owen',
    last_name: 'Toombes',
    email: 'otoombes@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 2)
toombes = Stable.create(
    name: "O. W. Toombes Livery Stable",
    phone_number: '901-457-2770',
    street_address: '96 North Center Street',
    city: 'Collierville',
    state: 'TN',
    zip: '38017',
    groom_id: otoombes.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 20,
    open_time: '04:00',
    close_time: '22:00',
    duration: 6,
    price: 5
)
file = open('https://openstableseeds.s3.amazonaws.com/toombes.jpg')
toombes.picture.attach(io:file, filename: "stable_#{toombes.id}_picture")

# outing stable
fouting = User.create(
    first_name: 'Foster',
    last_name: 'Outing',
    email: 'fouting@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
outing = Stable.create(
    name: "Outing Livery",
    phone_number: '509-653-2647',
    street_address: '29 East Second Street',
    city: 'Naches',
    state: 'WA',
    zip: '98937',
    groom_id: fouting.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '07:00',
    close_time: '22:00',
    duration: 5,
    price: 4
)
file = open('https://openstableseeds.s3.amazonaws.com/outing.jpg')
outing.picture.attach(io:file, filename: "stable_#{outing.id}_picture")

# ipswich stable
hruth = User.create(
    first_name: 'Henry',
    last_name: 'Rutherford',
    email: 'hruth@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)
ipswich = Stable.create(
    name: "Ipswich Livery Stable",
    phone_number: '978-356-6600',
    street_address: '25 Green Street',
    city: 'Ipswich',
    state: 'MA',
    zip: '01938',
    groom_id: hruth.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 10,
    open_time: '05:00',
    close_time: '23:30',
    duration: 8,
    price: 5
)
file = open('https://openstableseeds.s3.amazonaws.com/ipswich.jpg')
ipswich.picture.attach(io:file, filename: "stable_#{ipswich.id}_picture")

# howard stable
hrandy = User.create(
    first_name: 'Howard',
    last_name: 'Randall',
    email: 'hrandy@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)
howard = Stable.create(
    name: "Howard's Livery Stable",
    phone_number: '603-352-0133',
    street_address: '3 Washington Street',
    city: 'Keene',
    state: 'NH',
    zip: '03431',
    groom_id: hrandy.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 15,
    open_time: '04:00',
    close_time: '21:00',
    duration: 10,
    price: 3
)
file = open('https://openstableseeds.s3.amazonaws.com/howard.jpg')
howard.picture.attach(io:file, filename: "stable_#{howard.id}_picture")

# mcbride stable
kmcbride = User.create(
    first_name: 'Kirk',
    last_name: 'McBride',
    email: 'kmcbride@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
mcbride = Stable.create(
    name: "McBride Company Livery Stables",
    phone_number: '509-876-4859',
    street_address: '16 East Poplar Street',
    city: 'Walla Walla',
    state: 'WA',
    zip: '99362',
    groom_id: kmcbride.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 100,
    open_time: '02:00',
    close_time: '23:30',
    duration: 10,
    price: 10
)
file = open('https://openstableseeds.s3.amazonaws.com/mcbride.jpg')
mcbride.picture.attach(io:file, filename: "stable_#{mcbride.id}_picture")

# bryant stable
ebryant = User.create(
    first_name: 'Ernest',
    last_name: 'Bryant',
    email: 'rsmith@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
bryant = Stable.create(
    name: "Bryant & Scanlan Palace Livery",
    phone_number: '715-235-2144',
    street_address: '605 Second Street',
    city: 'Menomonie',
    state: 'WI',
    zip: '54751',
    groom_id: ebryant.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 40,
    open_time: '01:00',
    close_time: '22:00',
    duration: 6,
    price: 6
)
file = open('https://openstableseeds.s3.amazonaws.com/palace.jpg')
bryant.picture.attach(io:file, filename: "stable_#{bryant.id}_picture")

# smithworthen stable
cworthen = User.create(
    first_name: 'Craig',
    last_name: 'Worthen',
    email: 'cworthen@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 1)
smithworthen = Stable.create(
    name: "Smith and Worthen Livery & Sale Stable",
    phone_number: '802-888-6669',
    street_address: '43 Portland Street',
    city: 'Morrisville',
    state: 'VT',
    zip: '05661',
    groom_id: cworthen.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 25,
    open_time: '03:00',
    close_time: '20:00',
    duration: 10,
    price: 4
)
file = open('https://openstableseeds.s3.amazonaws.com/smithworthen.jpg')
smithworthen.picture.attach(io:file, filename: "stable_#{smithworthen.id}_picture")

# welsh stable
dwelsh = User.create(
    first_name: 'David',
    last_name: 'Welsh',
    email: 'dwelsh@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
welsh = Stable.create(
    name: "D. S. Welsh Livery, Hack & Transfer",
    phone_number: '316-283-1500',
    street_address: '121 West 6th Street',
    city: 'Newton',
    state: 'KS',
    zip: '67114',
    groom_id: dwelsh.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 40,
    open_time: '04:00',
    close_time: '22:00',
    duration: 4,
    price: 6
)
file = open('https://openstableseeds.s3.amazonaws.com/welsh.jpg')
welsh.picture.attach(io:file, filename: "stable_#{welsh.id}_picture")

# smithboyd stable
wsmith = User.create(
    first_name: 'Wallace',
    last_name: 'Smith',
    email: 'wsmith@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
smithboyd = Stable.create(
    name: "Smith Boyd Saloon & Stable",
    phone_number: '406-235-2288',
    street_address: '340 Wallace Street',
    city: 'Virginia City',
    state: 'MT',
    zip: '59755',
    groom_id: wsmith.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 15,
    open_time: '03:00',
    close_time: '23:30',
    duration: 3,
    price: 4
)
file = open('https://openstableseeds.s3.amazonaws.com/smithboyd.jpg')
smithboyd.picture.attach(io:file, filename: "stable_#{smithboyd.id}_picture")

# hoover stable
thoover = User.create(
    first_name: 'Thomas',
    last_name: 'Hoover',
    email: 'thoover@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 2)
tbhoover = Stable.create(
    name: "T. B. Hoover & Co. Livery Feed",
    phone_number: '704-238-6926',
    street_address: '239 East Trade Street',
    city: 'Charlotte',
    state: 'NC',
    zip: '28202',
    groom_id: thoover.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 12,
    open_time: '05:00',
    close_time: '22:00',
    duration: 5,
    price: 5
)
file = open('https://openstableseeds.s3.amazonaws.com/tbhoover.jpg')
tbhoover.picture.attach(io:file, filename: "stable_#{tbhoover.id}_picture")

# empire stable
rdickens = User.create(
    first_name: 'Richie',
    last_name: 'Dickens',
    email: 'rdickens@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
empire = Stable.create(
    name: "Empire Livery and Feed Stable",
    phone_number: '937-228-2222',
    street_address: '96 East Central Avenue',
    city: 'Camden',
    state: 'OH',
    zip: '45311',
    groom_id: rdickens.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 25,
    open_time: '06:00',
    close_time: '19:00',
    duration: 6,
    price: 4
)
file = open('https://openstableseeds.s3.amazonaws.com/empire.jpg')
empire.picture.attach(io:file, filename: "stable_#{empire.id}_picture")

# best stable
bbest = User.create(
    first_name: 'Berry',
    last_name: 'Best',
    email: 'bbest@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 2)
best = Stable.create(
    name: "Best Livery Stable",
    phone_number: '870-235-2424',
    street_address: '615 Third Street',
    city: 'Newport',
    state: 'AR',
    zip: '72112',
    groom_id: bbest.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '04:00',
    close_time: '18:00',
    duration: 7,
    price: 3
)
file = open('https://openstableseeds.s3.amazonaws.com/best.jpg')
best.picture.attach(io:file, filename: "stable_#{best.id}_picture")

# union stable
eworman = User.create(
    first_name: 'Edwin',
    last_name: 'Worman',
    email: 'eworman@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
unionlivery = Stable.create(
    name: "Union Livery Stable",
    phone_number: '541-222-3322',
    street_address: '226 East Main Street',
    city: 'Medford',
    state: 'OR',
    zip: '97501',
    groom_id: eworman.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 20,
    open_time: '03:00',
    close_time: '17:00',
    duration: 5,
    price: 4
)
file = open('https://openstableseeds.s3.amazonaws.com/unionlivery.jpg')
unionlivery.picture.attach(io:file, filename: "stable_#{unionlivery.id}_picture")

# simpson stable
dsimpson = User.create(
    first_name: 'Daniel',
    last_name: 'Simpson',
    email: 'dsimpson@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
simpson = Stable.create(
    name: "Simpson Livery & Feed Stable",
    phone_number: '509-725-4352',
    street_address: '411 Morgan Street',
    city: 'Davenport',
    state: 'WA',
    zip: '99122',
    groom_id: dsimpson.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 8,
    open_time: '06:00',
    close_time: '23:00',
    duration: 12,
    price: 2
)
file = open('https://openstableseeds.s3.amazonaws.com/simpson.jpg')
simpson.picture.attach(io:file, filename: "stable_#{simpson.id}_picture")

# grandcanyon stable
rthurman = User.create(
    first_name: 'Roger',
    last_name: 'Thurman',
    email: 'rthurman@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 4)
grandcanyon = Stable.create(
    name: "Grand Canyon National Park Livery Stable",
    phone_number: '928-232-4567',
    street_address: '472 Moqui Drive',
    city: 'Grand Canyon Village',
    state: 'AZ',
    zip: '86023',
    groom_id: rthurman.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 20,
    open_time: '05:00',
    close_time: '22:00',
    duration: 12,
    price: 8
)
file = open('https://openstableseeds.s3.amazonaws.com/grandcanyon.jpg')
grandcanyon.picture.attach(io:file, filename: "stable_#{grandcanyon.id}_picture")

# stephens stable
gstephens = User.create(
    first_name: 'George',
    last_name: 'Stephens',
    email: 'gstephens@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 2)
stephens = Stable.create(
    name: "Stephens Livery, Feed, & Sale Stable",
    phone_number: '800-275-8777',
    street_address: '401 Redman Street',
    city: 'Jacksonport',
    state: 'AR',
    zip: '72075',
    groom_id: gstephens.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 14,
    open_time: '06:00',
    close_time: '22:00',
    duration: 8,
    price: 6
)
file = open('https://openstableseeds.s3.amazonaws.com/stephens.jpg')
stephens.picture.attach(io:file, filename: "stable_#{stephens.id}_picture")

# hoteldehoss stable
jmoore = User.create(
    first_name: 'Jake',
    last_name: 'Moore',
    email: 'jmoore@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
hoteldehoss = Stable.create(
    name: "Hotel De Hoss Livery Stable",
    phone_number: '620-542-3333',
    street_address: '121 W Laurel Street',
    city: 'Independence',
    state: 'KS',
    zip: '67301',
    groom_id: jmoore.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 30,
    open_time: '04:00',
    close_time: '23:30',
    duration: 7,
    price: 9
)
file = open('https://openstableseeds.s3.amazonaws.com/hoteldehoss.jpg')
hoteldehoss.picture.attach(io:file, filename: "stable_#{hoteldehoss.id}_picture")

# eday stable
eday = User.create(
    first_name: 'Eugene',
    last_name: 'Day',
    email: 'eday@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 5)
eday1 = Stable.create(
    name: "E. Day Livery & Stable",
    phone_number: '925-123-4280',
    street_address: '1052 South Livermore Avenue',
    city: 'Livermore',
    state: 'CA',
    zip: '94550',
    groom_id: eday.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 20,
    open_time: '06:00',
    close_time: '22:00',
    duration: 4,
    price: 7
)
file = open('https://openstableseeds.s3.amazonaws.com/eday.jpg')
eday1.picture.attach(io:file, filename: "stable_#{eday1.id}_picture")

# ninepine stable
ehenry = User.create(
    first_name: 'Edward',
    last_name: 'Henry',
    email: 'ehenry@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 3)
ninepine = Stable.create(
    name: "9th & Pine Livery & Boarding Stable",
    phone_number: '314-222-2345',
    street_address: '901 Pine Street',
    city: 'St. Louis',
    state: 'MO',
    zip: '63101',
    groom_id: ehenry.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 15,
    open_time: '07:00',
    close_time: '21:00',
    duration: 4,
    price: 6
)
file = open('https://openstableseeds.s3.amazonaws.com/ninepine.jpg')
ninepine.picture.attach(io:file, filename: "stable_#{ninepine.id}_picture")

apolley = User.create(
    first_name: 'Alfred',
    last_name: 'Polley',
    email: 'apolley@gmail.com',
    password: 'password',
    phone_number: '',
    riding_location: 0)
polley = Stable.create(
    name: "A. M. Polley Livery Stable",
    phone_number: '519-222-3242',
    street_address: '57 West Street',
    city: 'Goderich',
    state: 'ON',
    zip: 'N7A 2K5',
    groom_id: apolley.id,
    description: 'This block was the original site of W.F. Cody Transportation Company, Buffalo Bill’s own stagecoach line to the Black Hills. The first building was built in 1894 for the business, which ran from this location from 1894 until 1901. It was also used for a long period of time as the Sheridan Inn’s livery stables. In 1923 the old stables were torn down and today’s building, with its stone exterior and large windows, was built just down the block to house a garage. While it has changed hands over the years, it has continued to be used for transportation purposes, including automobile repair and body shops, car sales, and as a bus stop, fulfilling the building’s original purpose of bringing people into Sheridan.',
    capacity: 15,
    open_time: '06:00',
    close_time: '23:30',
    duration: 8,
    price: 6
)
file = open('https://openstableseeds.s3.amazonaws.com/polley.jpg')
polley.picture.attach(io:file, filename: "stable_#{polley.id}_picture")
