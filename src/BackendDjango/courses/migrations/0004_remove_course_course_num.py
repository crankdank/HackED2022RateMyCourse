# Generated by Django 3.1.3 on 2022-01-16 06:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_remove_course_difficulty_remove_course_title_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='course_num',
        ),
    ]
