from django.urls import path
from comment import views

urlpatterns = [
    path('<str:video_id>', views.get_comment), #get
    path('', views.comment_put), #post
]