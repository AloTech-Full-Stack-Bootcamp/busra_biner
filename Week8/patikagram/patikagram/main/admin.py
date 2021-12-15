from django.contrib import admin
from django.db import models
from main.models import Post, Like, Comment


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    readonly_fields = ('user', 'content')
    can_delete = False

    def has_add_permission(self, request, obj):
        return False


class LikeInline(admin.StackedInline):
    model = Like
    extra = 0
    readonly_fields = ('user',)
    can_delete = False

    def has_add_permission(self, request, obj):
        return False


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "content", "author", "created_at", "likes_count", "like_comment_count"]
    list_filter = ["author", "created_at"]
    search_fields = ["content", "author__username"]
    autocomplete_fields = ["author"]
    inlines = [CommentInline, LikeInline]

    def like_comment_count(self, post):
        return f"Likes: {post.likes_count} / Comments: {post.comments_count}"


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]
    search_fields = ["content", "author__username"]