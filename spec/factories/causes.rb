# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :cause do
    title "MyString"
    description "MyText"
    total 1
    members 1
    user_id 1
  end
end
