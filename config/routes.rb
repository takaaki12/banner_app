Rails.application.routes.draw do
  get 'banners/pop_up', to: 'banners#pop_up'
  get 'banners/slide', to: 'banners#slide'
end
