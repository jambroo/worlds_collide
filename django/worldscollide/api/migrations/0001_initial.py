# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-18 20:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('src', models.CharField(max_length=100)),
                ('dest', models.CharField(max_length=100)),
            ],
        ),
    ]
