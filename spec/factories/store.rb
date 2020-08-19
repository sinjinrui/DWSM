FactoryBot.define do
  
  factory :store do
    name                    { "テストショップ" }
    email                   { "test@test" }
    password                { "test123" }
    password_confirmation   { "test123" }
  end
end