# Generated by Django 4.0.1 on 2022-01-16 04:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_remove_course_coursecode_remove_course_prefix_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='difficulty',
        ),
        migrations.RemoveField(
            model_name='course',
            name='title',
        ),
        migrations.RemoveField(
            model_name='course',
            name='topics',
        ),
        migrations.AddField(
            model_name='course',
            name='difficulty_level',
            field=models.IntegerField(default=3, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
        migrations.AddField(
            model_name='course',
            name='grade',
            field=models.IntegerField(default=3),
        ),
        migrations.AddField(
            model_name='course',
            name='number',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='subject',
            field=models.CharField(default='CMPUT', max_length=10),
        ),
        migrations.AlterField(
            model_name='course',
            name='rating',
            field=models.IntegerField(default=60, null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
    ]
