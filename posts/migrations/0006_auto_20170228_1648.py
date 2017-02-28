# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-28 14:48
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_auto_20170228_1552'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='draft',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='post',
            name='publish',
            field=models.DateField(default=datetime.datetime(2017, 2, 28, 14, 48, 14, 996072, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
