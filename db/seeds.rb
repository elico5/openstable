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
    password: 'password',
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
    price: 0.25
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
    price: 0.10
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
    price: 0.12
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
    price: 0.30
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

