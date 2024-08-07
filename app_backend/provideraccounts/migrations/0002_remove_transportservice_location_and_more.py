# Generated by Django 4.2.13 on 2024-07-06 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('provideraccounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transportservice',
            name='location',
        ),
        migrations.AddField(
            model_name='transportservice',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='transportservice',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='transportservice',
            name='address',
            field=models.CharField(max_length=255),
        ),
    ]
